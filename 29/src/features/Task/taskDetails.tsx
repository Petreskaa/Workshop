import { useParams } from "react-router-dom";
import { TaskState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Task, TaskData } from "./interfaces";
import { useEffect, useState } from "react";
import { updateData, createTask } from "../../redux/actions";

export const TaskDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    console.log(id);
    const {tasks} = useSelector((state: TaskState) => state.tasks as TaskData)
    const [taskItem, setTaskItem] = useState<Task | undefined>(undefined)
    const [title, setTitle] = useState<string>("");
    const [completed, setCompleted] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);


    useEffect(() => {
        const item = tasks.find((el: Task) => el.id === +id)
        if (item) {
            setTaskItem(item)
            setTitle(item.title)
            setCompleted(item.completed)
        }
    }, [id])


    const handleSave = (event: any) => {
        event.preventDefault();

        const taskObj: Task = {...taskItem, title, completed}
        dispatch(updateData(taskObj))
    }

    const onCreateHandler = (event: any) => {
        event.preventDefault();
        console.log("Create")
        setTitle("")
        setCompleted(false)
        if (taskItem.title !== title || taskItem.completed !== completed) {
            const createTaskObj: Task = {
                title,
                 completed
            }
            dispatch(createTask(createTaskObj))
            setIsEdit(!isEdit)
        }
    }
    const renderTaskDetails = () => {
        return <div>
            <h2>Task Details</h2>
            <form className="task-details-form">
                <span>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                         />
                </span>
                <span>
                    <label htmlFor="status">Status</label>
                    <input 
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(!completed)}
                         />
                </span>

                {taskItem && <button onClick={handleSave}>Save Changes</button>}

                <button onClick={onCreateHandler}>Create task</button>
            </form>
        </div>
    }


    return <div>{taskItem && renderTaskDetails()}</div>
}
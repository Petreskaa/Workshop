import { useEffect, useState } from "react"
import { taskApi } from "../../externals/task-api"
import axios from "axios"

import { useDispatch, useSelector } from "react-redux"
import { addData } from "../../redux/actions"
import { TaskState } from "../../redux/store"
import { Task } from "./interfaces"
import { TaskCard } from "./TaskCard"

export const TaskList = () => {
    const [name, setName] = useState<string>("")
    const [error, setError] = useState<string>("")

    const dispatch = useDispatch();
    const taskList = useSelector((state: TaskState) => state.tasks)


    useEffect(() => {
        axios.get(taskApi)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    dispatch(addData(res.data))
                }
            })
            .catch(err => {
                setError(err.message)
                console.error(err)
            })
    }, [])


    const renderTaskList = () => taskList.tasks.map((el: Task) => <TaskCard key={el.id} {...el}/>)
    

   
    return <div className="task-list">
        <h2>Task List</h2>
            {error && <h1>{error}</h1>}
            {renderTaskList()}
        </div>
}

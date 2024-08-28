import { Todo } from "../ToDoComponent/ToDoInterface"

export const ListItemComponent = ({id, title, isCompleted, setComplete, setDelete}: Todo) => {
    
    const handleDelete = (event: any) => {
        event.stopPropagation();
        isCompleted && setDelete(id)
    }

    return <>
        <li 
            key={id + 1} 
            className={isCompleted ? 'el crossed' : 'el'}
            onClick={() => setComplete(id)}>
            <span className="trash" onClick={handleDelete}>
                <i className="fa fa-trash"></i>
            </span>{" "}
                {title}
        </li>
    </>
}
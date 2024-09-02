import { Link } from "react-router-dom"
import { Task } from "./interfaces"

export const TaskCard = (task: Task) => {
    return <Link 
        to={`/task/${task.id}`}
        className="task-card">
        <h3>{task.title}</h3>
        <p>Status: {task.completed ? "Completed": "Not Completed" }</p>
    </Link>
}
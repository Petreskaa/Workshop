import React from "react";
import { Todo } from "../ToDoComponent/ToDoInterface";

export const ListItemComponent: React.FC<Todo> = ({ id, title, isCompleted, setComplete, setDelete }) => {
  return (
    <li>
      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={() => setComplete?.(id)}>Complete</button>
      <button onClick={() => setDelete?.(id)}>Delete</button>
    </li>
  );
};
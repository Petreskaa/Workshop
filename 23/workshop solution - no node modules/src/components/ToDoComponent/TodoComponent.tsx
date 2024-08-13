import React, { useEffect, useState } from "react";
import { Todo } from "./ToDoInterface";
import { data } from "./data";
import { ListItemComponent } from "../ListItemComponent/ListItemComponent";

export const ToDoComponent: React.FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>(data);
  const [inputValue, setInputValue] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(true);

  useEffect(() => {
    console.log(todosList);
  }, [todosList]);

  const setCompletedElement = (id: number) => {
    console.log("setCompletedElement with id: ", +id);
    const mappedLi: Todo[] = todosList.map((el) =>
      el.id === +id ? { ...el, isCompleted: !el.isCompleted } : el
    );
    return mappedLi;
  };

  const toggleComplete = (id: number) => {
    console.log("setCompletedElement with id: ", +id);
    const completedList = setCompletedElement(id);
    setTodosList([...completedList]);
  };

  const renderListItems = () => {
    return todosList.map((el) => {
      const funObj: Todo = {
        id: el.id,
        title: el.title,
        isCompleted: el.isCompleted,
        setComplete: toggleComplete,
        setDelete: handleDelete,
      };
      return <ListItemComponent key={el.id} {...funObj} />;
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.length > 0) {
      const newItem: Todo = {
        id: Math.floor(Math.random() * 1000),
        isCompleted: false,
        title: inputValue,
      };
      setTodosList((prevState) => [...prevState, newItem]);
      setInputValue("");
    }
  };

  const handleDelete = (id: number) => {
    console.log("delete item with id", id);
    const filteredElements = todosList.filter((el) => el.id !== id);
    setTodosList(filteredElements);
  };

  const onHideInput = () => {
    setShowInput((prevState) => !prevState);
  };

  const renderInput = () =>
    showInput && (
      <input
        type="text"
        placeholder="Add New Todo"
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleAdd}
      />
    );

  return (
    <>
      <h1>
        To-Do List
        <i
          className="fa fa-toggle-on"
          id="kopce"
          aria-hidden="true"
          onClick={onHideInput}
        ></i>
      </h1>
      {renderInput()}
      <ul>{renderListItems()}</ul>
    </>
  );
};
import React from "react";
import "./App.css";
import { ToDoComponent } from "./components/ToDoComponent/TodoComponent";

const App: React.FC = () => {
  return (
    <div id="container" className="App">
      <ToDoComponent />
    </div>
  );
};

export default App;

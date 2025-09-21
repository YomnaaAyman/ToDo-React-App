import "./App.css";
import { useState } from "react";
import Header from "../src/js/Header.js";
import InputTask from "../src/js/InputTask.js";
import TasksList from "./js/TasksList.js";
import ClearButton from "./js/ClearButton.js";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
  };

  // Clear all tasks
  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <Header />
      {/* ADDING TASKS */}
      <div
        style={{
          backgroundColor: "#F1ECE6",
          width: "1040px",
          height: "78px",
          border: "none",
          borderRadius: "50px",
          position: "absolute",
          top: "213px",
          left: "200px",
        }}
      >
        <InputTask onAdd={addTask} />
        <div>
          {tasks.length == 0 ? (
            <p
              style={{
                backgroundColor: "#F1ECE6",
                color: "#969696",
                font: "Poppins",
                fontWeight: "400",
                fontStyle: "normal",
                fontSize: "36px",
                lineHeight: "100%",
                border: "none",
                position: "absolute",
                left: "25%",
                top: "280%",
              }}
            >
              No Tasks Yet - add your first one !
            </p>
          ) : (
            <TasksList tasks={tasks} />
          )}
        </div>
      </div>
      {/* ADDING TASKS */}

      {tasks.length > 0 && <ClearButton onClear={clearTasks} />}
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import Header from "../src/js/Header.js";
import InputTask from "../src/js/InputTask.js";
import TasksList from "./js/TasksList.js";
import ClearButton from "./js/ClearButton.js";
import Modal from "./js/Model.js";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return; //no empty tasks allowed
    setTasks([...tasks, task]);
  };

  // Clear all tasks
  const clearTasks = () => {
    setTasks([]);
  };

  // //delete one task
  // const deleteTask = (index) => {
  //   const newTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(newTasks);
  // };

  const [showModal, setShowModal] = useState(false);
  const [taskDelete, setTaskDelete] = useState(null);

  function handleDeleteButton(index) {
    setTaskDelete(index);
    setShowModal(true);
  }

  function confirmDelete() {
    if (taskDelete != null) {
      setTasks(tasks.filter((_, i) => i !== taskDelete));
      setTaskDelete(null);
      setShowModal(false);
    }
  }

  function cancelDelete() {
    setTaskDelete(null);
    setShowModal(false);
  }

  return (
    <div className="App">
      <Header />
      {/* ADDING TASKS */}
      <div className="fullPage">
        <InputTask onAdd={addTask} />
        <div>
          <TasksList tasks={tasks} onDelete={handleDeleteButton} />
        </div>
      </div>
      {/* clear all button appears only when there is 1 task or more */}
      {tasks.length > 0 && <ClearButton onClear={clearTasks} />}
      <Modal
        isVisible={showModal}
        Confirm={confirmDelete}
        Cancel={cancelDelete}
      />
    </div>
  );
}

export default App;

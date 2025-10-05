import "./App.css";
import { useState } from "react";
import Header from "../src/js/Header.js";
import InputTask from "../src/js/InputTask.js";
import TasksList from "./js/TasksList.js";
import ClearButton from "./js/ClearButton.js";
import Modal from "./js/Model.js";

function App() {
  // const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskDelete, setTaskDelete] = useState(null);

  // Two separate lists of tasks
  const [personalTasks, setPersonalTasks] = useState([]);
  const [professionalTasks, setProfessionalTasks] = useState([]);

  // To check which tab is selected --> personal or professional
  const [activeTab, setActiveTab] = useState("personal");

  // 1) tasks : will be equal the tabbed button whether it is personal or professional
  // 2) setTasks : will set according to the tabbed list
  const tasks = activeTab === "personal" ? personalTasks : professionalTasks;
  const setTasks =
    activeTab === "personal" ? setPersonalTasks : setProfessionalTasks;

  // Add new tasks
  const addTask = (task) => {
    if (task.trim() === "") return; //no empty tasks allowed
    setTasks([...tasks, { task, finished: false }]); //task now is an object
  };

  // Clear all "Completed" tasks
  const clearTasks = () => {
    const newTasks = tasks.filter((task) => !task.finished);
    setTasks(newTasks);
  };

  // Delete specific task
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

  // Toggles the checkbox
  function toggleClick(index) {
    const updatedTasks = tasks.map((task, i) =>
      index === i ? { ...task, finished: !task.finished } : task
    );
    setTasks(updatedTasks); // updates the tasks list
  }

  return (
    <div className="App">
      <Header activeTab={activeTab} onChange={setActiveTab} />
      {/* ADDING TASKS */}
      <div className="fullPage">
        <InputTask onAdd={addTask} />
        <div>
          <TasksList
            tasks={tasks}
            onDelete={handleDeleteButton}
            onToggle={toggleClick}
          />
        </div>
        {/* clear completed button : appears only when there is 1 task or more */}
        {tasks.length > 0 && <ClearButton onClear={clearTasks} />}
        <Modal
          isVisible={showModal}
          Confirm={confirmDelete}
          Cancel={cancelDelete}
        />
      </div>
    </div>
  );
}

export default App;

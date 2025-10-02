import "../css/taskListStyle.css";
import { useState } from "react";
import Modal from "./Model";

export default function TasksList({ tasks, onDelete }) {
  const [finished, setTaskFinished] = useState(false);

  return (
    <div className="tasksContainer">
      {tasks.length === 0 ? (
        <p className="noTasksYet">No Tasks Yet - add your first one !</p>
      ) : (
        <ul className="displayedItems">
          {tasks.map((task, index) => (
            <li key={index} className="taskStyle">
              {task}
              <label className="checkBoxClass">
                <input
                  type="checkbox"
                  checked={finished}
                  onChange={(e) => {
                    setTaskFinished({ finished: e.target.value });
                  }}
                ></input>
              </label>

              <button onClick={onDelete} className="deleteButton">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* <Modal
        isVisible={showModal}
        Confirm={confirmDelete}
        Cancel={cancelDelete}
      />
      ; */}
    </div>
  );
}

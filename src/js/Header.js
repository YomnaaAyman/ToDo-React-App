import ToDoLogo from "../assets/ToDoLogo.png";
import "../css/header.css";

export default function Header({ activeTab, onChange }) {
  return (
    <div className="header">
      {/* To Do Logo */}
      <img src={ToDoLogo} alt="Logo" className="headerLogo" />

      <div className="buttonsContainer">
        <button
          className={`${activeTab === "personal" ? "active" : ""}`}
          onClick={() => onChange("personal")}
        >
          Personal
        </button>

        <button
          className={`${activeTab === "professional" ? "active" : ""}`}
          onClick={() => onChange("professional")}
        >
          Professional
        </button>
      </div>
    </div>
  );
}

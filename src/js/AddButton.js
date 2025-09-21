import "../css/addButton.css";

export default function AddButton({ onClick }) {
  return (
    <button className="addButton" onClick={onClick}>
      ADD
    </button>
  );
}

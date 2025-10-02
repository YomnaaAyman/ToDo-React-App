import AddButton from "./AddButton";
import { useState } from "react";
import "../css/inputStyle.css";

export default function InputTask({ onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    onAdd(input);
    setInput("");
  };
  return (
    <div className="container">
      <input
        value={input}
        name="TaskInput"
        onChange={(e) => setInput(e.target.value)}
        placeholder="What do you need to do?"
        className="inputStyle"
      />
      <AddButton onClick={handleAdd} />
    </div>
  );
}

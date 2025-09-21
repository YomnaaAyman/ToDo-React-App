import AddButton from "./AddButton";
import { useState } from "react";

export default function InputTask({ onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    onAdd(input);
    setInput("");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "1040px",
        height: "78px",
        borderRadius: "8px",
      }}
    >
      <input
        type="text"
        value={input}
        name="TaskInput"
        onChange={(e) => setInput(e.target.value)}
        placeholder="What do you need to do?"
        style={{
          display: "flex",
          alignContent: "center",
          backgroundColor: "#F1ECE6",
          color: "#969696",
          font: "Poppins",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "30px",
          lineHeight: "100%",
          border: "none",
          position: "absolute",
          left: "40px",
        }}
      />
      <AddButton onClick={handleAdd} />
    </div>
  );
}

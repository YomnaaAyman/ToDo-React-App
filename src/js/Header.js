import ToDoLogo from "../assets/ToDoLogo.png";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "#F1ECE6",
        width: "100%",
        height: "100px",
      }}
    >
      {/* To Do Logo */}
      <img
        src={ToDoLogo}
        alt="Logo"
        style={{
          width: "230.77px",
          height: "60px",
          position: "absolute",
          top: "20px",
          left: "605px",
        }}
      />
    </div>
  );
}

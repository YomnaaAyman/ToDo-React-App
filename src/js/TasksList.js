export default function TasksList({ tasks }) {
  let items = [];
  for (let i = 0; i < tasks.length; i++) {
    items.push(
      <ul
        key={i}
        style={{
          margin: "10px",
          padding: "20px",
          border: "2px solid #76b7cd",
          borderRadius: "12px",
          font: "Poppins",
          fontSize: "24px",
          color: "#333",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {tasks[i]}
      </ul>
    );
  }
  return (
    <div
      style={{
        backgroundColor: "#F1ECE6",
        width: "1040px",
        height: "500px",
        marginTop: "80px",
        borderRadius: "50px",
        padding: "20px",
        overflowY: "auto",
      }}
    >
      {tasks.length === 0 ? (
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
            top: "350%",
          }}
        >
          No Tasks Yet - add your first one !
        </p>
      ) : (
        <ul>
          <li
            style={{
              width: "90%",
              height: "88px",
              display: "flex",
              position: "absolute",
              left: "51px",
              flexDirection: "column",
              gap: "10px",
              font: "Poppins",
              fontWeight: "400",
              fontStyle: "normal",
              fontSize: "32px",
              lineHeight: "100%",
            }}
          >
            {items}
          </li>
        </ul>
      )}
    </div>
  );
}

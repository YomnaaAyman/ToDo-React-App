// isVisible is props to show modal on click on the button
// same for the erorMessage
import "../css/modalStyle.css";
export default function Modal({ isVisible, Confirm, Cancel }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1>Are You Sure You Want To Delete This Task ?</h1>
          <div className="buttonsContainer">
            <button
              className="btn"
              style={{ backgroundColor: "orange" }}
              onClick={Confirm}
            >
              Confirm
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "grey", color: "white" }}
              onClick={Cancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

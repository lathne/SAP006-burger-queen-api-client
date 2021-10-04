import "../styles/modal.scss";
import { Button } from "./Button";

export function Modal({ children, hide, setHide, callback }) {
  const closeModal = () => {
    setHide({ show: false });
    if (callback !== undefined) callback();
  };
  if (hide === false) {
    return <></>;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="validation-message">{children}</p>
        <div className="modal-button">
          <Button buttonText="OK" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
}

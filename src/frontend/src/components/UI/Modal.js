import classes from "./Modal.module.css";
import ReactDom from "react-dom";
const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.exitCart}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<BackDrop exitCart={props.exitCart} />, portal)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </>
  );
};

export default Modal;

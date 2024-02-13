import React from "react";
import { createPortal } from "react-dom";
import "../../styles/modals.scss";

const Modal = ({
  setIsOpen,
  children,
  className = "",
  backgroundClassName = "",
}) => {
  return createPortal(
    <>
      <div
        className={"modal-background " + backgroundClassName}
        onClick={() => setIsOpen(false)}
      />
      <div className={"modal " + className}>{children}</div>
    </>,
    document.body
  );
};

export default Modal;

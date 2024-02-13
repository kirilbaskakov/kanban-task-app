import React from "react";
import Modal from "./Modal";
import BoardsList from "../BoardsList";
import ThemeButton from "../ThemeButton";

const SidebarModal = ({ setIsOpen }) => {
  return (
    <Modal
      setIsOpen={setIsOpen}
      className="sidebar-modal"
      backgroundClassName="sidebar-modal-background "
    >
      <div className="modal-wrapper">
        <BoardsList />
        <ThemeButton />
      </div>
    </Modal>
  );
};

export default SidebarModal;

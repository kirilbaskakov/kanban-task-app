import React from "react";
import iconBoard from "../assets/icon-board.svg";

const CreateBoardButton = ({ onClick }) => {
  return (
    <div className="create-board-wrapper">
      <img src={iconBoard} className="create-board-icon" />
      <span className="heading-m create-board" onClick={onClick}>
        + Create New Board
      </span>
    </div>
  );
};

export default CreateBoardButton;

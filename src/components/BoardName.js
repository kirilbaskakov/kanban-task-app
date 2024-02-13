import React from "react";
import iconBoard from "../assets/icon-board.svg";

const BoardName = ({ name, isSelected, onClick }) => {
  return (
    <div
      className={"board-name-wrapper" + (isSelected ? " active" : "")}
      onClick={onClick}
    >
      <img src={iconBoard} />
      <span className="board-name heading-m">{name}</span>
    </div>
  );
};

export default BoardName;

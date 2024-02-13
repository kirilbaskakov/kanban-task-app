import React, { useState } from "react";
import Column from "./Column";
import { useSelector } from "react-redux";
import { selectSelectedBoard } from "./../store/boardsSlice";
import AddEditBoardModal from "./modal/AddEditBoardModal";
import "../styles/board.scss";

const Board = () => {
  const columns = useSelector((state) => selectSelectedBoard(state)?.columns);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="board">
      {columns && (
        <>
          {columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
          <div className="new-column" onClick={() => setIsEditModalOpen(true)}>
            + New Column
          </div>
        </>
      )}

      {isEditModalOpen && (
        <AddEditBoardModal setIsOpen={setIsEditModalOpen} isEdit={true} />
      )}
    </div>
  );
};

export default Board;

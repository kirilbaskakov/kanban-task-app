import React, { useState } from "react";
import BoardName from "./BoardName";
import CreateBoardButton from "./CreateBoardButton";
import AddBoardModal from "./modal/AddEditBoardModal";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedBoard, setSelectedBoard } from "../store/boardsSlice";

const BoardsList = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.boards);
  const selectedBoard = useSelector(selectSelectedBoard);
  const [isAddBoardModalOpen, setIsAddBoardMoalOpen] = useState(false);

  return (
    <div>
      <h3 className="heading-s board-list-title">
        ALL BOARDS ({boards.length})
      </h3>
      <div>
        {boards.map((board) => (
          <BoardName
            name={board.name}
            isSelected={selectedBoard?.id == board.id}
            onClick={() => dispatch(setSelectedBoard(board.id))}
            key={board.id}
          />
        ))}
        <CreateBoardButton onClick={() => setIsAddBoardMoalOpen(true)} />
      </div>
      {isAddBoardModalOpen && (
        <AddBoardModal setIsOpen={setIsAddBoardMoalOpen} />
      )}
    </div>
  );
};

export default BoardsList;

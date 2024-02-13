import React from "react";
import Modal from "./Modal";

import { deleteBoard, deleteTask } from "../../store/boardsSlice";
import { useDispatch } from "react-redux";

const DeleteModal = ({ type, data, setIsOpen }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(type == "board" ? deleteBoard() : deleteTask(data));
  };

  return (
    <Modal setIsOpen={setIsOpen}>
      <div className="delete-modal">
        <h2 className="heading-l title">Delete this {type}?</h2>
        <p className="text-l description">
          {type == "board"
            ? `Are you sure you want to delete the "${data.name}" board? This action
          will remove all columns and tasks and cannot be reversed.`
            : `Are you sure you want to delete the "${data.name}" task and its subtasks? 
          This action cannot be reversed.`}
        </p>
        <div className="buttons">
          <button className="full-width danger" onClick={onDelete}>
            Delete
          </button>
          <button
            className="full-width secondary"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;

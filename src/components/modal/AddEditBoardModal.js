import React, { useState } from "react";
import Modal from "./Modal";
import MultiInput from "../common/MultiInput";
import { useDispatch, useSelector } from "react-redux";
import {
  addBoard,
  selectSelectedBoard,
  updateBoard,
} from "../../store/boardsSlice";

const AddEditBoardModal = ({ setIsOpen, isEdit = false }) => {
  const dispatch = useDispatch();
  const board = useSelector(selectSelectedBoard);
  const [columns, setColumns] = useState(isEdit ? board.columns : []);
  const [name, setName] = useState(isEdit ? board.name : "");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      isEdit ? updateBoard({ name, columns }) : addBoard({ name, columns })
    );
    setIsOpen(false);
  };

  const addColumn = (id, value) => {
    setColumns([...columns, { id, name: value, tasks: [] }]);
  };

  const changeColumn = (id, value) => {
    setColumns(
      columns.map((column) =>
        column.id == id ? { ...column, name: value } : column
      )
    );
  };

  const deleteColumn = (id) => {
    setColumns(columns.filter((column) => column.id != id));
  };

  return (
    <Modal setIsOpen={setIsOpen}>
      <div className="modal-wrapper">
        <h2 className="heading-l title">
          {isEdit ? "Edit board" : "Add new board"}
        </h2>
        <form className="form" onSubmit={onSubmit}>
          <label>
            <h4 className="text-m label">Board Name</h4>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <h4 className="text-m label">Board Columns</h4>
            <MultiInput
              buttonName={"+ Add New Column"}
              onAddInput={addColumn}
              onChangeInput={changeColumn}
              onDeleteInput={deleteColumn}
              defaultValue={
                isEdit
                  ? board.columns.map((column) => ({
                      value: column.name,
                      id: column.id,
                    }))
                  : []
              }
            />
          </label>
          <button className="full-width">
            {isEdit ? "Save changes" : "Create New Board"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddEditBoardModal;

import React, { useState } from "react";
import Modal from "./Modal";
import MultiInput from "../common/MultiInput";
import Select from "../common/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  selectSelectedBoard,
  updateTask,
  updateTaskStatus,
} from "../../store/boardsSlice";

const AddEditTaskModal = ({ setIsOpen, isEdit = false, task = null }) => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => selectSelectedBoard(state).columns);
  const [subtasks, setSubtasks] = useState(task?.subtasks || []);
  const [status, setStatus] = useState(task?.status || columns[0].name);
  const [description, setDescription] = useState(task?.description || "");
  const [name, setName] = useState(task?.name || "");

  const addSubtask = (id, value) => {
    setSubtasks([...subtasks, { id, name: value, completed: false }]);
  };

  const changeSubtask = (id, value) => {
    setSubtasks(
      subtasks.map((subtask) =>
        subtask.id == id ? { ...subtask, name: value } : subtask
      )
    );
  };

  const deleteSubtask = (id) => {
    setSubtasks(subtasks.filter((subtask) => subtask.id != id));
  };

  const createTask = (e) => {
    e.preventDefault();
    if (isEdit) {
      console.log(1);
      if (status != task.status) {
        dispatch(updateTaskStatus({ task, status }));
      }
      dispatch(
        updateTask({
          id: task.id,
          name,
          description,
          subtasks,
          status,
        })
      );
    } else {
      dispatch(
        addTask({
          name,
          description,
          subtasks,
          status,
        })
      );
    }
    setIsOpen(false);
  };

  return (
    <Modal setIsOpen={setIsOpen}>
      <div className="modal-wrapper">
        <h2 className="heading-l title">
          {isEdit ? "Edit task" : "Add new task"}
        </h2>
        <form className="form">
          <label>
            <h4 className="text-m label">Task Name</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <h4 className="text-m label">Description</h4>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <h4 className="text-m label">Subtasks</h4>
            <MultiInput
              buttonName={"+ Add New Subtask"}
              onAddInput={addSubtask}
              onChangeInput={changeSubtask}
              onDeleteInput={deleteSubtask}
              defaultValue={
                task?.subtasks.map((subtask) => ({
                  value: subtask.name,
                  id: subtask.id,
                })) || []
              }
            />
          </label>
          <label>
            <h4 className="text-m label">Current status</h4>
            <Select
              options={columns.map((column) => ({
                value: column.name,
                id: column.id,
              }))}
              selected={status}
              setSelected={setStatus}
            />
          </label>
          <button className="full-width" onClick={createTask}>
            {isEdit ? "Save changes" : "Create Task"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddEditTaskModal;

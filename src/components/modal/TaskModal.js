import React, { useState } from "react";
import Modal from "./Modal";
import Select from "../common/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedBoard,
  updateTask,
  updateTaskStatus,
} from "../../store/boardsSlice";
import KebabMenu from "../common/KebabMenu";

const TaskModal = ({ task, setIsOpen }) => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => selectSelectedBoard(state).columns);
  const [status, setStatus] = useState(task.status);

  const updateSubtask = (subtask) => {
    const newTask = {
      ...task,
      subtasks: task.subtasks.map((item) =>
        item.id === subtask.id ? { ...item, completed: !item.completed } : item
      ),
    };
    dispatch(updateTask(newTask));
  };

  const onClose = () => {
    if (status != task.status) {
      dispatch(updateTaskStatus({ task, status }));
    }
    setIsOpen(false);
  };

  return (
    <Modal setIsOpen={onClose}>
      <div className="modal-wrapper">
        <div className="task-modal-heading">
          <h2 className="heading-l title">{task.name}</h2>
          <KebabMenu type="task" data={task} />
        </div>
        <p className="text-l task-description">{task.description}</p>
        <form className="form">
          <div>
            <div className="heading-s subtask-heading">
              {`Subtasks (${
                task.subtasks.filter((subtask) => subtask.completed).length
              } of
              ${task.subtasks.length})`}
            </div>
            <div>
              {task.subtasks.map((subtask) => (
                <div
                  className="subtask"
                  key={subtask.id}
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    checked={subtask.completed}
                    onChange={(e) => updateSubtask(subtask)}
                  />
                  <span
                    className={
                      "text-l" + (subtask.completed ? " completed" : "")
                    }
                  >
                    {subtask.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-m label">Current status</div>
            <Select
              options={columns.map((column) => ({
                value: column.name,
                id: column.id,
              }))}
              selected={status}
              setSelected={setStatus}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default TaskModal;

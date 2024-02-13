import React from "react";
import Task from "./Task";
import { useDispatch } from "react-redux";
import { dragTask } from "../store/boardsSlice";

const Column = ({ column }) => {
  const dispatch = useDispatch();

  const onDrop = () => {
    dispatch(dragTask(column.name));
  };

  return (
    <div
      className="column-wrapper"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <span className="heading-s column-name">
        {column.name} ({column.tasks.length})
      </span>
      <div className="task-wrapper">
        {column.tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Column;

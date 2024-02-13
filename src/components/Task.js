import React, { useState } from "react";
import TaskModal from "./modal/TaskModal";
import { useDispatch } from "react-redux";
import { setDraggingTask } from "../store/boardsSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDragStart = (e) => {
    dispatch(setDraggingTask(task));
  };

  const onDragEnd = (e) => {
    dispatch(setDraggingTask(null));
  };

  return (
    <>
      <div
        className="task"
        onClick={() => setIsModalOpen(true)}
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div className="heading-m task-title">{task.name}</div>
        <div className="text-m task-text">
          {task.subtasks.filter((subtask) => subtask.completed).length} of{" "}
          {task.subtasks.length} subtasks
        </div>
      </div>
      {isModalOpen && <TaskModal setIsOpen={setIsModalOpen} task={task} />}
    </>
  );
};

export default Task;

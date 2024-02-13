import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const getSelectedBoard = (state) => {
  return state.boards.find((board) => board.id === state.selectedBoardId);
};

const boardsSlice = createSlice({
  name: "boards",
  initialState: {
    boards: data.boards,
    selectedBoardId: null,
    draggingTask: null,
  },
  reducers: {
    addBoard: (state, action) => {
      state.boards.push({
        id: new Date().getTime(),
        name: action.payload.name,
        columns: action.payload.columns,
      });
    },

    deleteBoard: (state, action) => {
      const index = state.boards.findIndex(
        (board) => board.id === state.selectedBoardId
      );
      state.boards.splice(index, 1);
    },

    updateBoard: (state, action) => {
      state.boards = state.boards.map((board) =>
        board.id === state.selectedBoardId
          ? { ...action.payload, id: board.id }
          : board
      );
    },

    setSelectedBoard: (state, action) => {
      state.selectedBoardId = action.payload;
    },

    addTask: (state, action) => {
      const selectedBoard = getSelectedBoard(state);
      const column = selectedBoard.columns.find(
        (column) => column.name === action.payload.status
      );
      column.tasks.push({ ...action.payload, id: new Date().getTime() });
    },

    deleteTask: (state, action) => {
      const selectedBoard = getSelectedBoard(state);
      const task = action.payload;
      const column = selectedBoard.columns.find(
        (column) => column.name === task.status
      );
      const index = column.tasks.findIndex(({ id }) => id == task.id);
      column.tasks.splice(index, 1);
    },

    updateTask: (state, action) => {
      const selectedBoard = getSelectedBoard(state);
      const task = action.payload;
      const column = selectedBoard.columns.find(
        (column) => column.name === task.status
      );
      column.tasks = column.tasks.map((item) =>
        item.id === task.id ? task : item
      );
    },

    updateTaskStatus: (state, action) => {
      const selectedBoard = getSelectedBoard(state);
      const { task, status } = action.payload;
      const columnFrom = selectedBoard.columns.find(
        (column) => column.name === task.status
      );
      const index = columnFrom.tasks.findIndex((item) => item.id === task.id);
      columnFrom.tasks.splice(index, 1);
      const columnTo = selectedBoard.columns.find(
        (column) => column.name === status
      );
      columnTo.tasks.push({ ...task, status });
    },

    dragTask: (state, action) => {
      const status = action.payload;
      if (state.draggingTask.status == status) {
        return;
      }
      const selectedBoard = getSelectedBoard(state);
      const columnFrom = selectedBoard.columns.find(
        (column) => column.name === state.draggingTask.status
      );
      const index = columnFrom.tasks.findIndex(
        (item) => item.id === state.draggingTask.id
      );
      columnFrom.tasks.splice(index, 1);
      const columnTo = selectedBoard.columns.find(
        (column) => column.name === status
      );
      columnTo.tasks.push({ ...state.draggingTask, status });
    },

    setDraggingTask: (state, action) => {
      state.draggingTask = action.payload;
    },
  },
  selectors: {
    selectSelectedBoard: (state) => getSelectedBoard(state),
  },
});

export const {
  addBoard,
  deleteBoard,
  updateBoard,
  setSelectedBoard,
  addTask,
  deleteTask,
  updateTask,
  updateTaskStatus,
  setDraggingTask,
  dragTask,
} = boardsSlice.actions;

export const { selectSelectedBoard } = boardsSlice.selectors;

export default boardsSlice;

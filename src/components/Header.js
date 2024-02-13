import React, { useState } from "react";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
import logoMobile from "../assets/logo-mobile.svg";
import chevronUp from "../assets/icon-chevron-up.svg";
import chevronDown from "../assets/icon-chevron-down.svg";
import AddTaskModal from "./modal/AddEditTaskModal";
import { useSelector } from "react-redux";
import { selectSelectedBoard } from "../store/boardsSlice";
import KebabMenu from "./common/KebabMenu";
import "../styles/header.scss";
import { selectTheme } from "../store/themeSlice";
import { useMediaQuery } from "react-responsive";
import SidebarModal from "./modal/SidebarModal";

const Header = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const theme = useSelector(selectTheme);
  const boardName = useSelector((state) => selectSelectedBoard(state)?.name);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header>
      <img
        src={!isBigScreen ? logoMobile : theme == "dark" ? logoLight : logoDark}
      />
      <h2 className="heading-l board-name">{boardName}</h2>
      {!isBigScreen && (
        <img
          className="icon"
          src={isSidebarOpen ? chevronUp : chevronDown}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      )}
      {boardName && (
        <>
          <button
            className="heading-m add-btn"
            onClick={() => setIsAddTaskModalOpen(true)}
          >
            {isBigScreen ? "+ Add New Task" : "+"}
          </button>
          <KebabMenu type="board" data={{ name: boardName }} />
        </>
      )}
      {isAddTaskModalOpen && <AddTaskModal setIsOpen={setIsAddTaskModalOpen} />}
      {!isBigScreen && isSidebarOpen && (
        <SidebarModal setIsOpen={setIsSidebarOpen} />
      )}
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import BoardsList from "./BoardsList";
import ThemeButton from "./ThemeButton";
import iconHideSidebar from "../assets/icon-hide-sidebar.svg";
import iconShowSidebar from "../assets/icon-show-sidebar.svg";
import "../styles/sidebar.scss";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({ inModal = false }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (inModal) {
      return;
    }
    if (!isBigScreen) {
      close();
    } else {
      open();
    }
  }, [isBigScreen]);

  const open = () => {
    setIsOpen(true);
    document.body.classList.remove("sidebar-hidden");
  };

  const close = () => {
    setIsOpen(false);
    document.body.classList.add("sidebar-hidden");
  };

  return (
    <div>
      <div className={"sidebar" + (isOpen ? "" : " hidden")}>
        <BoardsList />
        <ThemeButton />
        <div className="hide-sidebar">
          <img src={iconHideSidebar} />
          <span className="heading-m title" onClick={close}>
            Hide Sidebar
          </span>
        </div>
      </div>
      {isBigScreen && !isOpen && (
        <div className="show-sidebar" onClick={open}>
          <img src={iconShowSidebar} />
        </div>
      )}
    </div>
  );
};

export default Sidebar;

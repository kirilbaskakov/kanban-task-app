import React from "react";
import IconDark from "../assets/icon-dark-theme.svg";
import IconLight from "../assets/icon-light-theme.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, switchTheme } from "../store/themeSlice";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const onClick = () => {
    document.body.classList.toggle("dark");
    dispatch(switchTheme());
  };

  return (
    <div className="theme-button-wrapper">
      <img src={IconLight} />
      <div className={"theme-button " + theme} onClick={onClick}>
        <div className="theme-button-circle" />
      </div>
      <img src={IconDark} />
    </div>
  );
};

export default ThemeButton;

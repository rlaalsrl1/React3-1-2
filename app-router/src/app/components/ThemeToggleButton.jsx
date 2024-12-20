"use client";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Mode" : "Swich to light Mode"}
    </button>
  );
};

export default ThemeToggleButton;

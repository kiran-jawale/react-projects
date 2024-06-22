import React, { useContext } from "react";
import { ThemeContext, useTheme } from "../../contexts/themeContext";
import { useDom } from "../../contexts/handleDom";
import { NavLink } from "react-router-dom";
import logo from "../../../public/Designer.png";

function Header() {
  const { isGradient, toggleTheme} =
    useTheme();
    const {toggleEditable, toggleRightDiv } = useDom()

  return (
    <header
      className={`${
        isGradient
         ? "bg-zinc-700 text-white"
          : "bg-zinc-800 font-semibold text-green-300"
      } flex duration-200 justify-between items-center px-4 z-[10] sm:px-6 lg:px-8 h-16`}
    >
      <div className="flex w-1/2 justify-between items-center">
        <div className="flex justify-between gap-1">
          <img className="rounded-full h-6 w-6" src={logo} alt="" />
          <span className="text-teal-600">DOCS MINI</span>
        </div>
        <button
          className="ml-4  text-white hover:scale-110 h-8 w-8 text-3xl  transition-transform duration-300 font-bold rounded-full shadow-xl"
          onClick={toggleTheme}
        >
          {isGradient? "🌙" : "🌒"}
        </button>
        <button
          onClick={toggleEditable}
          className="bg-gray-300 cursor-pointer rounded-full p-2"
        >
          <span role="img" aria-label="file">
            🔃
          </span>
        </button>
        <button
          onClick={toggleRightDiv}
          className="bg-gray-300 cursor-pointer rounded-full p-2"
        >
          <span role="img" aria-label="file">
            📁
          </span>
        </button>{" "}
      </div>
      <div className="flex items-center gap-6 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
             ? "text-gradient-to-r from-green-400 to-yellow-500"
              : "text-gray-500 hover:text-gray-500/75"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/docs"
          className={({ isActive }) =>
            isActive
             ? "text-gradient-to-r from-green-400 to-yellow-500"
              : "text-gray-500 hover:text-gray-500/75"
          }
        >
          Docs
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
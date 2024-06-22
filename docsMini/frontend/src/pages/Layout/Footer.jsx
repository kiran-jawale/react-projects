import React from "react";
import { useDom } from "../../contexts/handleDom";
import { NavLink } from "react-router-dom";

function Footer() {
  const { toggleEditable, toggleRightDiv } = useDom();

  return (
    <footer id="footer" className="bg-white flex  justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
      <div className="text-gray-500">© 2024 DOCS MINI</div>
      <div className="flex items-center gap-6 text-sm">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive? "text-pink-500" : "text-gray-500 hover:text-gray-500/75"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive? "text-pink-500" : "text-gray-500 hover:text-gray-500/75"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive? "text-pink-500" : "text-gray-500 hover:text-gray-500/75"
          }
        >
          Help
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
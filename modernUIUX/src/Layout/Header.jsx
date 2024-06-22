import React, { useState } from "react";
import { navLinks } from "../constants";
import { logo, close, menu } from "../assets";
import { NavLink } from "react-router-dom";
import styles from "../style";

const Header = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.paddingX} bg-primary ${styles.flexCenters}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
              >
                <NavLink
                  className={({isActive}) => ` ${isActive ? "text-white" : "text-dimWhite"} ${
                    index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  } `}
                  to={`/${nav.id}`}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px]  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                
              >
                <NavLink
                  className={({isActive}) => ` ${isActive ? "text-white" : "text-dimWhite"}`}
                  to={`/${nav.id}`}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

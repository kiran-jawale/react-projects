import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../contexts/theme'; // Import the ThemeContext

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext); 

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = currentDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  return (
    <header id={location.pathname === "/dashboard"? "dashheader" : "header"} className={`sticky ${theme === 'light' ? 'bg-red-500 border-yellow-400 text-white' : 'bg-zinc-800 border-red-700 text-white' } top-0 z-50 shadow-lg transition-all duration-300 ${location.pathname === '/dashboard' ? 'bg-red-500 border-yellow-400' : 'bg-sky-400 border-sky-600'} rounded-lg p-4`}>
      <div className="flex flex-col items-center">
        <div className="flex items-center w-full">
          <div className="flex-shrink-0">
            <img src="path-to-your-logo.png" alt="Company Logo" className="w-16 h-16 rounded-full shadow-lg transition-transform duration-300 hover:scale-150 hover:shadow-xl" />
          </div>
          <button
            className="ml-4 text-lg text-white hover:scale-110 transition-transform duration-300 font-bold rounded-full shadow-xl"
            onClick={toggleTheme}
          >
            {theme === 'light'? 'Dark Mode' : 'Light Mode'}
          </button>
          <div className="ml-auto text-lg text-white hover:scale-110 transition-transform duration-300 font-bold rounded-full shadow-xl">
            {formattedDate} - {formattedTime}
          </div>
        </div>
        <nav className="mt-4">
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" className={({ isActive }) => `py-2 px-4 font-bold rounded transition-colors duration-300 ${isActive ? 'text-orange-700' : 'text-white'} hover:bg-gray-50 hover:text-orange-700`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => `py-2 px-4 font-bold rounded transition-colors duration-300 ${isActive ? 'text-orange-700' : 'text-white'} hover:bg-gray-50 hover:text-orange-700`}>
                Dashboard
              </NavLink>
            </li>
            <li className="relative group">
              <NavLink to="#" className="py-2 px-4 font-bold rounded transition-colors duration-300 text-white hover:bg-gray-50 hover:text-orange-700">
                Contact
              </NavLink>
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg shadow-lg mt-2 space-y-2 p-2">
                <li>
                  <NavLink to="/contact-us" className="block py-2 px-4 text-white rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" className="block py-2 px-4 text-white rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/social-profiles" className="block py-2 px-4 text-white rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                    Social Profiles
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <NavLink to="#" className="py-2 px-4 font-bold rounded transition-colors duration-300 text-white hover:bg-gray-50 hover:text-orange-700">
                Policies
              </NavLink>
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded-lg shadow-lg mt-2 space-y-2 p-2">
                <li>
                  <NavLink to="/disclaimer" className="block py-2 px-4 text-white rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                    Disclaimer
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/privacy-policy" className="block py-2 px-4 text-white rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms-and-conditions" className="block py-2 px-4 text-white rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                    Terms and Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/copyright-policy" className="block py-2 px-4 text-white rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                    Copyright Policies
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

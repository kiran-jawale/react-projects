import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation()
  return (
    <footer id={location.pathname === "/dashboard"? "dashfooter" : "footer"} className={`p-4 text-center ${location.pathname === '/dashboard' ? 'bg-purple-600 text-yellow-400' : 'bg-gray-800 text-teal-300'} rounded-lg shadow-md mt-8`}>
      <div className="flex justify-center mb-4">
        <a href="#" id="backToTopButton" title="Back To Top" className="bg-black text-teal-300 border border-teal-300 p-2 rounded-full text-2xl font-bold hover:bg-gray-800 transition-transform duration-300 hover:scale-110">&#9650;</a>
      </div>
      <div className="flex justify-around space-x-8 mb-4">
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <ul>
            <li>
              <NavLink to="/contact-us" className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/social-profiles" className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                Social Profiles
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Policies & More</h3>
          <ul>
            <li>
              <NavLink to="/disclaimer" className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                Disclaimer
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-conditions" className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                Terms and Conditions
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Recent Posts</h3>
          <ul>
            <li>
              <NavLink to="/recent-blog-1" className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                Recent Blog 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/recent-blog-2" className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                Recent Blog 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/recent-blog-3" className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-700 hover:text-orange-700">
                Recent Blog 3
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm font-light">
        &copy; Copyright 2024 | My Tasks Set
      </div>
    </footer>
  );
};

export default Footer;

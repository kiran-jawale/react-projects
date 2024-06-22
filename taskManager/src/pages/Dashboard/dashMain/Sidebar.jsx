import { useDispatch, useSelector } from 'react-redux';
import React,{useContext} from 'react';
import { logoutUser } from '../../../features/userSlice';
import { ThemeContext } from '../../../contexts/theme';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { users, loggedInUser } = useSelector((state) => state.user);
  const username = loggedInUser && loggedInUser.username;
  const tasks = username && users.find((user) => user.username === username).tasks;
  const { theme } = useContext(ThemeContext); 


  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div id="sidebar" className={` font-semibold border-solid border-4 ${theme === 'light' ? 'bg-green-500 border-green-600 text-green-900 shadow-yellow-400 shadow-lg' : 'bg-zinc-800 shadow-lg text-white border-green-300 shadow-green-400' }`} style={{ display: loggedInUser ? 'block' : 'none' }}>
      <div className="sidebar-header">
        <h2>User Dashboard</h2>
      </div>
      <div className="profile-section">
        <h3>Welcome, <span id="prof-username">{username}</span>!</h3>
        <p>Total Tasks Completed Today: <span id="tasks-completed-today">{tasks && tasks.length}</span></p>
      </div>
      <ul className="navcontainer">
        <li className="nav-option">
          <span>Task Status</span>
        </li>
        <li className="nav-option">
          <span>Blog</span>
        </li>
        <li className="nav-option" id="logout-option" onClick={handleLogout}>
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
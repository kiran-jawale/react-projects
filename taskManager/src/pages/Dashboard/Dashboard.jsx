import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from '../../contexts/theme';
import Login from "./sectionDash/Login";
import Register from "./sectionDash/Register";
import Sidebar from "./dashMain/Sidebar";
import PasswordRecovery from "./sectionDash/PasswordRecovery";
import TaskManager from "./dashMain/TaskManager";
import BoxContainers from "./dashMain/BoxContainers";

const Dashboard = () => {
  

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [showRegister, setShowRegister] = useState(false);
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
  const { theme } = useContext(ThemeContext); 

  const handleToggleRegister = () => setShowRegister(!showRegister);
  const handleTogglePasswordRecovery = () =>
    setShowPasswordRecovery(!showPasswordRecovery);


  return (
    <div
      id="main-layout"
      className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-zinc-800 text-white'} flex flex-col items-center justify-center`}
    >
      {loggedInUser ? (
        <section id="dash-main" className="flex flex-col md:flex-row w-full">
          <Sidebar />
          <div id="main-content" className="flex-1 p-4">
            <BoxContainers />
            <TaskManager />
          </div>
        </section>
      ) : (
        <section id="sectiondash" className="flex flex-col items-center">
          <Login
            onToggleRegister={handleToggleRegister}
            onTogglePasswordRecovery={handleTogglePasswordRecovery}
          />
          {showRegister && <Register onClose={handleToggleRegister} />}
          {showPasswordRecovery && (
            <PasswordRecovery onClose={handleTogglePasswordRecovery} />
          )}
        </section>
      )}
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { useSelector } from 'react-redux';

const BoxContainers = () => {
  const { users, loggedInUser } = useSelector((state) => state.user);
  const username = loggedInUser && loggedInUser.username;
  const user = users.find((user) => user.username === username);
  const tasks = user && user.tasks;

  const totalTasks = tasks && tasks.length;
  const totalTasksCompleted = tasks && tasks.filter((task) => task.status).length;
  const tasksRemained = tasks && tasks.filter((task) =>!task.status).length;
  const topPriorityTasks = tasks && tasks.filter((task) => task.priority === 'top').length;

  return (
    <div className="box-container">
      <div className="box">
        <h3>Total Tasks</h3>
        <p id="box-p">{totalTasks || 0}</p>
      </div>
      <div className="box">
        <h3>Total Tasks Completed</h3>
        <p id="box-p">{totalTasksCompleted || 0}</p>
      </div>
      <div className="box">
        <h3>Tasks Remained</h3>
        <p id="box-p">{tasksRemained || 0}</p>
      </div>
      <div className="box">
        <h3>Top Priority Status</h3>
        <p id="box-p">{topPriorityTasks || 0}</p>
      </div>
    </div>
  );
};

export default BoxContainers;
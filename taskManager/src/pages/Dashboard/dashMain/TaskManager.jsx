import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserTasks } from '../../../features/userSlice';
import TaskItem from './TaskItem';


const TaskManager = () => {
  const [task, setTask] = useState({
    name: '',
    priority: 'top',
    date: '',
    time: '',
  });

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const currentTasks = users.find((user) => user.username === loggedInUser.username)?.tasks || [];

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = { 
      ...task, 
      status: false, 
      id: (1111 + Math.random() * 9999).toString() + new Date().getTime().toString()
    };
    const updatedTasks = [...currentTasks, newTask];
    dispatch(updateUserTasks({ username: loggedInUser.username, tasks: updatedTasks }));
    setTask({ name: '', priority: 'top', date: '', time: '' });
  };

  return (
    <div className="task-scheduler">
      <h3>Task Scheduler</h3>
      <form onSubmit={handleAddTask}>
        <input type="text" name="name" placeholder="Enter task" value={task.name} onChange={handleChange} required />
        <select name="priority" value={task.priority} onChange={handleChange} required>
          <option value="top">Top</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input type="date" name="date" value={task.date} onChange={handleChange} required />
        <input type="time" name="time" value={task.time} onChange={handleChange} required />
        <button type="submit">Add Task</button>
      </form>
      <h4>Tasks List</h4>
      <ul>
        {currentTasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;

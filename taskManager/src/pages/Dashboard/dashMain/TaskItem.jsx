import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import {
  updateTask,
  deleteTask,
  updateUserTaskStatus,
} from "../../../features/userSlice";


const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.user);
  const [isChecked, setIsChecked] = useState(task.status);
  const [editable, setEditable] = useState(false);
  const [taskData, setTaskData] = useState({ ...task });

  const handleEditToggle = () => {
    if (editable) {
      dispatch(updateTask({ username: loggedInUser.username, task: taskData }));
    }
    setEditable(!editable);
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
    dispatch(updateUserTaskStatus({ task, username: loggedInUser.username }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = () => {
    dispatch(deleteTask({ username: loggedInUser.username, taskId: task.id }));
  };

  return (
    <div className="flex items-center p-4 bg-white rounded shadow mb-4">
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={handleToggle}
      />
      <input
        type="text"
        name="name"
        value={taskData.name}
        onChange={handleChange}
        readOnly={!editable}
        className={`mr-4 p-2 border ${
          editable ? "border-blue-500" : "border-gray-300"
        } rounded w-32`}
      />
      <select
        name="priority"
        value={taskData.priority}
        onChange={handleChange}
        disabled={!editable}
        className="bg-zinc-800 text-white focus:text-green-400"
        required
      >
        <option value="top">Top</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <input
        type="date"
        name="date"
        value={taskData.date}
        onChange={handleChange}
        readOnly={!editable}
        className={`mr-4 p-2 border ${
          editable ? "border-blue-500" : "border-gray-300"
        } rounded w-32`}
      />
      <input
        type="time"
        name="time"
        value={taskData.time}
        onChange={handleChange}
        readOnly={!editable}
        className={`mr-4 p-2 border ${
          editable ? "border-blue-500" : "border-gray-300"
        } rounded w-24`}
      />
      <button
        onClick={handleEditToggle}
        className="mr-4 py-2 px-4 bg-blue-500 text-white rounded"
      >
        {editable ? "Save" : "Edit"}
      </button>
      <button
        onClick={handleDelete}
        className="py-2 px-4 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
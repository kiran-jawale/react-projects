import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../features/userSlice';

const Login = ({ onToggleRegister, onTogglePasswordRecovery }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      dispatch(loginUser(user));
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div id="" className="w-full max-w-xs p-4 bg-background text-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-4">
          <label htmlFor="username" className="block text-sm font-medium">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="input-group mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">Login</button>
      </form>
      <span 
        onClick={onTogglePasswordRecovery} 
        className="text-sm text-blue-500 mt-2 block cursor-pointer">
        Forgot Password?
      </span>
      <span 
        onClick={onToggleRegister} 
        className="text-sm text-blue-500 mt-2 block cursor-pointer">
        Register/Sign Up
      </span>
    </div>
  );
};

export default Login;

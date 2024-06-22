import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../features/userSlice';

const Register = ({ onClose }) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    favoriteColor: '',
    fourDigitNumber: '',
  });

  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = users.some((user) => user.username === form.username);
    if (userExists) {
      alert('Username already exists.');
    } else {
      dispatch(registerUser(form));
      alert('Registration successful! You can now log in.');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 text-white  bg-opacity-75 z-50">
      <div className=" p-6 rounded shadow-lg w-full max-w-md">
        <span 
          onClick={onClose} 
          className="text-xl text-gray-500 absolute top-4 right-4 cursor-pointer">&times;
        </span>
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-4">
            <label htmlFor="username" className="block text-sm font-medium">Username:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={form.username} 
              onChange={handleChange} 
              required 
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="input-group mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="input-group mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={form.password} 
              onChange={handleChange} 
              required 
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="input-group mb-4">
            <label htmlFor="favoriteColor" className="block text-sm font-medium">Favorite Color:</label>
            <input 
              type="text" 
              id="favoriteColor" 
              name="favoriteColor" 
              value={form.favoriteColor} 
              onChange={handleChange} 
              required 
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="input-group mb-4">
            <label htmlFor="fourDigitNumber" className="block text-sm font-medium">4-Digit Number:</label>
            <input 
              type="number" 
              id="fourDigitNumber" 
              name="fourDigitNumber" 
              value={form.fourDigitNumber} 
              onChange={handleChange} 
              required 
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

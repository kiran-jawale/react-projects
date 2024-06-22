import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recoverPassword } from '../../../features/userSlice';

const PasswordRecovery = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [fourDigitNumber, setFourDigitNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, error } = await dispatch(recoverPassword({ username, favoriteColor, fourDigitNumber }));
    if (error) {
      alert(error);
    } else {
      setPassword(password);
      setShowPassword(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
        <span 
          onClick={onClose} 
          className="text-xl text-gray-500 absolute top-4 right-4 cursor-pointer">&times;
        </span>
        <h2 className="text-xl font-semibold mb-4">Password Recovery</h2>
        <form id="passwordform" onSubmit={handleSubmit}>
          <div className="input-group mb-4">
            <label htmlFor="usernameRecovery" className="block text-sm font-medium">Username:</label>
            <input
              type="text"
              id="usernameRecovery"
              name="usernameRecovery"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="input-group mb-4">
              <label htmlFor="favoriteColorRecovery" className="block text-sm font-medium">Favorite Color:</label>
              <input
                type="text"
                id="favoriteColorRecovery"
                name="favoriteColorRecovery"
                value={favoriteColor}
                onChange={(event) => setFavoriteColor(event.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="input-group mb-4">
              <label htmlFor="fourDigitNumberRecovery" className="block text-sm font-medium">4-Digit Number:</label>
              <input
                type="number"
                id="fourDigitNumberRecovery"
                name="fourDigitNumberRecovery"
                value={fourDigitNumber}
                onChange={(event) => setFourDigitNumber(event.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <button type="submit" id="recoverPasswordBtn" className="w-full py-2 bg-blue-500 text-white rounded">
              Recover
            </button>
          </form>
          {showPassword && (
            <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
              <h2 className="text-lg font-semibold">Password Recovery</h2>
              <p className="mt-2">Your password is: <span className="font-bold">{password}</span></p>
              <button 
                id="okButton" 
                onClick={() => setShowPassword(false)}
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
              >
                OK
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default PasswordRecovery;
  

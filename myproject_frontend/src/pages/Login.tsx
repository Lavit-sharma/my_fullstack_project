import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import api from '../api/axios';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('auth/login/', { username, password });
      const token = response.data.access;
      const payload = JSON.parse(atob(token.split('.')[1]));
      dispatch(login({ token, username, tokenExpiry: payload.exp * 1000 }));
    } catch {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 to-purple-600">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-6 w-full rounded"
          required
        />
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded w-full hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

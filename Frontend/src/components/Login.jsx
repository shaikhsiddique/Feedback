import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import gsap from 'gsap';

function Login({setView}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      messageRef.current.textContent = 'Please fill in all fields';
      gsap.to(messageRef.current, {
        opacity: 1,
        duration: 0.2,
      });
      return;
    }

    axios
      .post('/admin/login', { email, password }, { withCredentials: true })
      .then((res) => {
        localStorage.setItem('Auth-Token', res.data.token);
        setView('feedbacks')
        
      })
      .catch((err) => {
        const message =
          err.response?.data?.message || 'Something went wrong';
        messageRef.current.textContent = message;
        gsap.to(messageRef.current, {
          opacity: 1,
          duration: 0.2,
        });
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <p
          ref={messageRef}
          className="text-red-500 mb-4 text-center opacity-0 transition-opacity duration-300"
        ></p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

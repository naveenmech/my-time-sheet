import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
            placeholder="Enter your password"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const specificEmail = 'user@gmail.com';

    if (email === specificEmail) {
      // Proceed with login and redirect to the dashboard
      console.log('Login successful');
      navigate('/user/data'); // Redirect to the dashboard route
    } else {
      setError('Invalid email address');
    }
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/hal1hunt/Home/Screenshot_2024-07-26_204341-removebg-preview%20(1).png?updatedAt=1722006934311')"
        }}
      ></div>
      <div className="flex items-center justify-center flex-1">
        <div className="w-1/2 max-w-md p-10 space-y-6 rounded-lg shadow-md border border-orange-600">
          <h2 className="text-2xl font-bold text-center">User Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
            <NavLink to='/register'>
              <p className="text-sm text-center text-gray-600 cursor-pointer p-1">
                Don't have an account? Sign up
              </p>
            </NavLink>
            <NavLink to='/alogin'>
              <p className="text-sm font-semibold text-center text-indigo-600 cursor-pointer p-1">
                Login for Admin
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authService } from '../../service/auth';

const Login = () => {
  
  const navigate = useNavigate();

  // const checkRedirect = async () => {
  //   if (authService.getToken() !== null && authService.isLoggedIn()) {
  //     const userRole = authService.getUserRole();
  //     if (userRole !== null) {
  //       if (userRole === "Admin") {
  //         toast.success("Welcome");
  //         navigate('/admin/dashboard');
  //       } else if (userRole === "User") {
  //         toast.success("Welcome");
  //         navigate('/user/data');
  //       } else if (userRole === "Owner") {
  //         toast.success("Welcome");
  //         navigate('/manager/hall');
  //       } 
  //     }
  //   }
  // };

  // useEffect(() => {
  //   checkRedirect();
  // }, []);

  const emailur = useRef();
  const passwordur = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await authService.SignIn(emailur.current.value, passwordur.current.value);
      
      if (res.status === 200) {
        authService.setToken(res.data.token);
        toast.success("Welcome"); 
  
        if (res.data.role === 'USER') {
          setTimeout(() => navigate('/user/data'), 2000);
        } else if (res.data.role === 'OWNER') {
          setTimeout(() => navigate('/manager/hall'), 2000);
        } else if (res.data.role === 'ADMIN') {
          setTimeout(() => navigate('/admin/dashboard'), 2000);
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Incorrect email or password");
        } else if (error.response.status === 404) {
          toast.error("Email not registered");
        } else {
          toast.error("Incorrect email or password");
        }
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  

  return (
    <div className="flex min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="flex-1 bg-cover bg-center bg-orange-200 rounded-b-full"
        style={{
          backgroundImage: "url('https://images.herzindagi.info/image/2023/Nov/wedding-in-rajasthan-palace.jpg')"
        }}
      ></div>
      <div className="flex items-center justify-center flex-1">
        <div className="w-1/2 max-w-md p-10 space-y-6 rounded-lg shadow-md border border-orange-600">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                ref={emailur}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                ref={passwordur}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
            <NavLink to='/register'>
              <p className="text-sm text-center text-gray-600 cursor-pointer p-1">
                Don't have an account? Sign up
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import axios from 'axios';
import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = (e) => {
  const navigate = useNavigate();

const userNameRef=useRef();
const userEmailRef=useRef();
const userPhoneRef=useRef();
const userPasswordRef=useRef();



const handleSubmit=async(e)=>{
  e.preventDefault();


const signup = {
  

  name: userNameRef.current.value,
  email: userEmailRef.current.value,
  phone: userPhoneRef.current.value,
  password: userPasswordRef.current.value
};

try {
  const response = await axios.post('http://localhost:8080/request/register', signup);
  if (response.data) {
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  }
} catch (error) {
  console.error('Signup failed:', error);
}
}





  return (
    <div className="flex min-h-screen">
     <div
        className="flex-1 bg-cover bg-center bg-orange-200 rounded-b-full"
        style={{
          backgroundImage: "url('https://images.herzindagi.info/image/2023/Nov/wedding-in-rajasthan-palace.jpg')"
        }}
      ></div>
      <div className="flex items-center justify-center flex-1">
        <div className="w-1/2 max-w-md p-8 space-y-6 rounded-lg shadow-md border border-orange-600 ">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <form id="registrationform"className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                placeholder="Name"
                ref={userNameRef}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                ref={userEmailRef}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required 
              />
            </div>
            <div>
              <input
                type="number"
                id="phone"
                placeholder="Phone Number"
                ref={userPhoneRef}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                ref={userPasswordRef}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required
              />
            </div>
            <div>
             
              <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign Up
              </button>
             
            </div>
            <NavLink to="/login">
              <p className="text-sm text-center text-gray-600 cursor-pointer p-1">
                Already have an account? Sign in
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

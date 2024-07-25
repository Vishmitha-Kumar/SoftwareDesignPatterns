import React from 'react';

const SignUp = () => {

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-1/4 max-w-md p-8 space-y-6  rounded-lg shadow-md border border-orange-600">
        <h2 className="text-2xl font-bold text-center ">Sign Up</h2>
        <form  className="space-y-4">
          <div>
            
            <input
              type="text"
              id="name"
              placeholder='Name'
              
              className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
              required
            />
          </div>
          <div>
            
            <input
              type="email"
              id="email"
              placeholder='Email'
              
               className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
              required
            />
          </div>
          <div>
            
            <input
              type="number"
              id="phone"
              placeholder='Phonenumber'
              
              className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
              required
            />
          </div>
          <div>
            
            <input
              type="password"
              id="password"
              placeholder='Password'
             
               className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
              required
            />
          </div>
          <div>
            
            <input
              type="password"
              id="confirmPassword"
              placeholder='Confirm Password'
           
              className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Sign Up
            </button>
          </div>
          <p className="text-sm text-center text-gray-600">
          Already have an account? <a className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">Sign in</a>
        </p>
         
        </form>
      </div>
    </div>
  );
};

export default SignUp;





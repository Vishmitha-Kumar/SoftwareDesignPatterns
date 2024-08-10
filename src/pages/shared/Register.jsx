import axiosInstance from 'axios';
import React, { useRef,useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'
import {Register} from '..//..//service/api'

const SignUp = () => {
  const navigate = useNavigate();
  const [registerdata,setRegisterdata]=useState({
    name:'',
    email:'',
    password:'',
    role:'',
    })

    
    const handleChange=(e)=>{
      setRegisterdata({...registerdata,[e.target.id]: e.target.value})
    }


const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log(registerdata);
  const res=await Register(registerdata.name,registerdata.email,registerdata.password,registerdata.role);
  
  if (res.status === 200) {
    toast.success("Register Successfull")
    setTimeout(()=>{
      navigate('/login')
    },5000)
  }
  else{
    toast.error(res.data)
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
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
                required 
              />
            </div>
            <div>
            <select
              id="role"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
              required
            >
              <option value="" disabled selected>Select your role</option>
              <option value="USER">USER</option>
              <option value="OWNER">OWNER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
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
      <Toaster/>
    </div>
  );
};

export default SignUp;







































// import axios from 'axios';
// import React, { useRef } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { toast, Toaster } from 'react-hot-toast'

// const SignUp = (e) => {
//   const navigate = useNavigate();

// const userNameRef=useRef();
// const userEmailRef=useRef();
// const userPasswordRef=useRef();
// const userRoleRef=useRef();



// const handleSubmit=async(e)=>{
//   e.preventDefault();


// const signup = {
  

//   name: userNameRef.current.value,
//   email: userEmailRef.current.value,
//   password: userPasswordRef.current.value,
//   role: userRoleRef.current.value,
// };

// try {
//   const response = await axios.post('http://localhost:8080/api/v1/auth/register', signup);
//   if (response.data) {
//     toast.success("Signup Success")
//     setTimeout(() => {
//       navigate('/login');
//     }, 1500);
//   }
// } catch (error) {
//   console.error('Signup failed:', error);
// }
// }

//   return (
//     <div className="flex min-h-screen">
//      <div
//         className="flex-1 bg-cover bg-center bg-orange-200 rounded-b-full"
//         style={{
//           backgroundImage: "url('https://images.herzindagi.info/image/2023/Nov/wedding-in-rajasthan-palace.jpg')"
//         }}
//       ></div>
//       <div className="flex items-center justify-center flex-1">
//         <div className="w-1/2 max-w-md p-8 space-y-6 rounded-lg shadow-md border border-orange-600 ">
//           <h2 className="text-2xl font-bold text-center">Sign Up</h2>
//           <form id="registrationform"className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Name"
//                 ref={userNameRef}
//                 className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 ref={userEmailRef}
//                 className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
//                 required 
//               />
//             </div>
//             <div>
//               <input
//                 type="text"
//                 id="roll"
//                 placeholder="Role"
//                 ref={userRoleRef}
//                 className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 ref={userPasswordRef}
//                 className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
//                 required
//               />
//             </div>
//             <div>
             
//               <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                 Sign Up
//               </button>
             
//             </div>
//             <NavLink to="/login">
//               <p className="text-sm text-center text-gray-600 cursor-pointer p-1">
//                 Already have an account? Sign in
//               </p>
//             </NavLink>
//           </form>
//         </div>
//       </div>
//       <Toaster/>
//     </div>
//   );
// };

// export default SignUp;

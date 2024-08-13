import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { authService } from '../../service/auth'
const Login = () => {
  
  const navigate = useNavigate();

  const checkRedirect = async () => {
    if (authService.getToken() !== null && authService.isLoggedIn()) {
        const userRole = authService.getUserRole();
        if (userRole !== null) {
            if (userRole === "Admin") {
                navigate('/admin/dashboard');
            } else if (userRole === "User") {
                navigate('/user/data');
            } else if (userRole === "Owner") {
                navigate('/user/data');
            } else {
                toast.error("Something went wrong");
            }
        }
    }
};

useEffect(() => {
    checkRedirect();
}, []);






  const emailur=useRef();
  const passwordur=useRef();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await authService.SignIn(emailur.current.value, passwordur.current.value)
    if (res.status === 200 && res.data.role==='USER') {
        authService.setToken(res.data.token)
        toast.success("Welcome")
        navigate('/user/data')
      }
      else if (res.status === 200 && res.data.role === 'OWNER'){
      authService.setToken(res.data.token)
      toast.success("Welcome")
      navigate('/manager/hall');
    }
    else if (res.status === 200 && res.data.role === 'ADMIN'){
      authService.setToken(res.data.token)
      toast.success("Welcome")
      navigate('/admin/dashboard');
    }

};


  return (
    <div className="flex min-h-screen">
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
{/*             
            <NavLink to='/alogin'>
              <p className="text-sm font-semibold text-center text-indigo-600 cursor-pointer p-1">
                Login for Admin
              </p>
            </NavLink> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;















// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast'
// import React, { useRef, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Login = () => {
  
//   const navigate = useNavigate();
//   const emailur=useRef();
//   const passwordur=useRef();
  

  

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const signin={
//       email:emailur.current.value,
//       password:passwordur.current.value
//     }
  

// try {
//   const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', signin);
//   if (response.data) {
//     setTimeout(() => {
//       navigate('/user/data');
//     }, 1500);
//   }
// } catch (error) {
//   console.error('Signin failed:', error);
// }
// }

  


//   return (
//     <div className="flex min-h-screen">
//       <div
//         className="flex-1 bg-cover bg-center bg-orange-200 rounded-b-full"
//         style={{
//           backgroundImage: "url('https://images.herzindagi.info/image/2023/Nov/wedding-in-rajasthan-palace.jpg')"
//         }}
//       ></div>
//       <div className="flex items-center justify-center flex-1">
//         <div className="w-1/2 max-w-md p-10 space-y-6 rounded-lg shadow-md border border-orange-600">
//           <h2 className="text-2xl font-bold text-center">User Login</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Email"
//                 ref={emailur}
//                 className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                ref={passwordur}
//                 className="w-full px-3 py-2 mt-1 border-b-2 text-black border-gray-300 rounded-md focus:outline-none focus:ring-orange-600 focus:border-orange-600"
//                 required
//               />
//             </div>
           
//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 Sign in
//               </button>
//             </div>
           
//               <p className="text-sm text-center text-gray-600 cursor-pointer p-1">
//                 Don't have an account? Sign up
//               </p>
            
//             <NavLink to='/alogin'>
//               <p className="text-sm font-semibold text-center text-indigo-600 cursor-pointer p-1">
//                 Login for Admin
//               </p>
//             </NavLink>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

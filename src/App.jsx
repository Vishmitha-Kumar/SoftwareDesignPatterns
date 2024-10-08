import React from "react";
import Login from "./pages/shared/Login";
import Alogin from "./pages/shared/Adminlogin";
import SignUp from "./pages/shared/Register";
import Home from "./pages/shared/Home";
import AdminLayout from "./Layout/Adminlayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
// import AdminUsers from "./pages/Admin/AdminUsers";
import HomeLayout from "./Layout/Homelayout";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminUsers from "./pages/Admin/AdminUsers";
import Userdata from "./pages/User/Userdata";
import UserLayout from "./Layout/Userlayout";
import UserDashboard from "./pages/User/UserDashboard";
import Adminadd from "./pages/Admin/Adminadd";
import DescriptionPage from "./components/shared/Description";
import FavoritesPage from "./components/shared/FavoritePages";
import Manager from "./pages/HallManager/Manager";
import ManagerLayout from "./Layout/Managerlayout";

const App = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route element={<HomeLayout />}>
                      <Route path='/' element={<Home />} />
                      <Route path='/login' element={<Login />} />
                      <Route path='/register' element={<SignUp />} />
                        <Route path='/alogin' element={<Alogin />}/> 
                  </Route>
                  <Route element={<AdminLayout />}>
                    <Route path='/admin/dashboard' element={<AdminDashboard />}/>
                    <Route path='/admin/users' element={<AdminUsers />}/>
                  </Route>
                  <Route element={<UserLayout />}>
                    <Route path='/user/data' element={<Userdata />}/>
                    <Route path='/user/dashboard' element={<UserDashboard/>}/>
                    <Route path="/description/:hallID" element={<DescriptionPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                  </Route>
                  <Route element={<ManagerLayout />}>
                    <Route path='/manager/hall' element={<Manager/>}/>
                    <Route path='/admin/hall' element={<Adminadd/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}
export default App

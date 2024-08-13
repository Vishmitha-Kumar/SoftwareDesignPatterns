import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Power, Blocks } from 'lucide-react'
import { Button } from '../ui/button'

const Leftbar = () => {
  const AdminLinks = [
    {
      title: 'Dashboard',
      link: '/admin/dashboard',
      icon: LayoutDashboard
    }, 
    {
      title: 'Users',
      link: '/admin/users',
      icon: Users
    },
  
  ]

  return (
    <div className='h-full w-full flex flex-col items-center shadow-sm shadow-primary p-5 '>
      <div className='h-20 w-full flex justify-center items-center'>
        <img src="https://ik.imagekit.io/hal1hunt/Home/Screenshot_2024-07-25_191002-removebg-preview.png" alt="Logo" />
      </div>
      <div className='flex-grow w-full flex flex-col items-center gap-2'>
        {
          AdminLinks.map((data, index) => (
            <NavLink key={index} to={data.link} className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full'>
              <span className='flex flex-row items-center justify-start w-full gap-2'>
                {React.createElement(data.icon, { size: 20 })}
                {data.title}
              </span>
            </NavLink>
          ))
        }
      </div>
      <div className='w-full'>
        <Button className='p-5 bg-red-500/5 hover:bg-red-500/10 font-bold w-full '>
        <NavLink to="/">
          <span className='flex flex-row items-center justify-start w-full gap-2 text-red-500'>
            <Power size={20} /> Logout
          </span>
            </NavLink>
        </Button>
      </div>
    </div>
  )
}

export default Leftbar;

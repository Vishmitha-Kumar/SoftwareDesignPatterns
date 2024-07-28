import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ModeToggle } from '../mode-toggle'

    import { LayoutDashboard } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Topbar = () => {

    const UserLinks = [
        {
          link: '/user/dashboard',
          icon: LayoutDashboard
        }
    ]
    return (
        <div className='h-[7vh] w-full flex justify-center items-center shadow-sm shadow-primary '>
            <div className='w-[90%] h-full flex items-center justify-end gap-4'>
            <div >
        {
          UserLinks.map((data, index) => (
            <NavLink key={index} to={data.link} className='p-5 font-bold mt-2'>
              <span className='flex flex-row items-center justify-start  gap-2'>
                {React.createElement(data.icon)}
               
              </span>
            </NavLink>
          ))
        }
      </div>
                <ModeToggle/>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>MM</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Topbar
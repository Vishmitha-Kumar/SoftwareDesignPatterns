import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../mode-toggle';
import { Heart, LayoutDashboard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Topbar = () => {

    const UserLinks = [
        {
            link: '/user/dashboard',
            icon: LayoutDashboard
        },
        {
            link: '/favorites',
            icon: Heart
        }
    ];

    return (
        <div className='h-[7vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
            <div className='w-[90%] h-full flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    {UserLinks.map((data, index) => (
                        <NavLink
                            key={index}
                            to={data.link}
                            className='p-5 font-bold flex items-center justify-center'
                            activeClassName='text-blue-500' // Optional: to style the active link
                        >
                            {React.createElement(data.icon)}
                        </NavLink>
                    ))}
                </div>
                <div className='flex items-center justify-end gap-3'>
                <ModeToggle />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>MM</AvatarFallback>
                </Avatar>
                </div>
            </div>
        </div>
    );
};

export default Topbar;

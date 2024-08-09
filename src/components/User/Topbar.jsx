import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../mode-toggle';
import { Heart, LayoutDashboard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Topbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [profileDetails, setProfileDetails] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: ''
    });

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

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        setIsEditingProfile(false); // Close edit form when dropdown is toggled
    };

    const handleEditProfile = () => {
        setIsEditingProfile(true);
    };

    const handleCancel = () => {
        setDropdownOpen(false);
        setIsEditingProfile(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileDetails({ ...profileDetails, [name]: value });
    };

    const handleSave = () => {
        // Save logic here (e.g., API call to update profile details)
        console.log('Profile saved', profileDetails);
        setDropdownOpen(false);
        setIsEditingProfile(false);
    };

    return (
        <div className='h-[7vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
            <div className='w-[90%] h-full flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    {UserLinks.map((data, index) => (
                        <NavLink
                            key={index}
                            to={data.link}
                            className='p-5 font-bold flex items-center justify-center'
                        >
                            {React.createElement(data.icon)}
                        </NavLink>
                    ))}
                </div>
                <div className='flex items-center justify-end gap-3 relative'>
                    <ModeToggle />
                    <div className='relative'>
                        <Avatar onClick={toggleDropdown} className='cursor-pointer'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>MM</AvatarFallback>
                        </Avatar>
                        {dropdownOpen && (
                            <div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg p-4'>
                                {!isEditingProfile ? (
                                    <div>
                                        <button 
                                            className='w-full text-left py-2 px-4 hover:bg-gray-100'
                                            onClick={handleEditProfile}
                                        >
                                            Edit Profile
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700'>Username</label>
                                            <input 
                                                type='text' 
                                                name='username'
                                                value={profileDetails.username} 
                                                onChange={handleChange}
                                                className='w-full mt-1 border rounded px-2 py-1' 
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700'>Email</label>
                                            <input 
                                                type='email' 
                                                name='email'
                                                value={profileDetails.email} 
                                                onChange={handleChange}
                                                className='w-full mt-1 border rounded px-2 py-1' 
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700'>Password</label>
                                            <input 
                                                type='password' 
                                                name='password'
                                                value={profileDetails.password} 
                                                onChange={handleChange}
                                                className='w-full mt-1 border rounded px-2 py-1' 
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700'>Phone Number</label>
                                            <input 
                                                type='text' 
                                                name='phoneNumber'
                                                value={profileDetails.phoneNumber} 
                                                onChange={handleChange}
                                                className='w-full mt-1 border rounded px-2 py-1' 
                                            />
                                        </div>
                                        <div className='flex justify-end gap-10'>
                                            <button 
                                                className='bg-gray-300 text-black rounded py-1 px-2' 
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </button>
                                            <button 
                                                className='bg-blue-500 text-white rounded py-1 px-2'
                                                onClick={handleSave}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;

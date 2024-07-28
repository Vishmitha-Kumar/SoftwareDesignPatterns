import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Leftbar from '@/components/User/Leftbar'
import Topbar from '@/components/User/Topbar'

const UserLayout = () => {
  const [filters, setFilters] = useState({})

  return (
    <div className='h-screen w-screen flex'>
      <div className='h-full w-1/4 overflow-y-auto '>
        <Leftbar setFilters={setFilters} />
      </div>
      <div className='w-3/4 ml-auto flex flex-col'>
        <div className='fixed w-3/4'>
          <Topbar />
        </div>
        <div className='h-[calc(100vh-7vh)] w-full mt-[7vh] overflow-y-auto'>
          <Outlet context={{ filters }} />
        </div>
      </div>
    </div>
  )
}

export default UserLayout

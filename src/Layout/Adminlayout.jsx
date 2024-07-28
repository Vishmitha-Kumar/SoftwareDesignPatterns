import React from 'react'
import { Outlet } from 'react-router-dom'
import Leftbar from '@/components/Admin/Leftbar'
import Topbar from '@/components/Admin/Topbar'

const AdminLayout = () => {
  return (
    <div className='h-screen w-screen flex items-center'>
      <div className='fixed h-full w-1/6'>
        <Leftbar />
      </div>
      <div className='w-5/6 ml-auto flex flex-col'>
        <div className='fixed w-5/6'>
          <Topbar />
        </div>
        <div className='h-[calc(100vh-7vh)] w-full mt-[7vh] overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout

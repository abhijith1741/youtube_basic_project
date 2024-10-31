import React from 'react'
import SideMenu from './SideMenu'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex mt-24'>
        <SideMenu />
        <Outlet />
    </div>
  )
}

export default Body
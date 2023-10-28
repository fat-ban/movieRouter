//import React from 'react'
import { Outlet } from 'react-router-dom'
import NavMenu from '../NavMenu/NavMenu'

const Layout = () => {
  return (
    <div>
        <NavMenu/>
        <Outlet/>
    </div>
  )
}

export default Layout
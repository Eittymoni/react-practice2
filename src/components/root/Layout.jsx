import React from 'react'
import { Outlet } from 'react-router-dom'
import Manu from '../manu/Manu'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div>
      <Manu/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout

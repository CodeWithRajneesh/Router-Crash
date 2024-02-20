import React from 'react'
// import Home from './Component/Home/Home'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import{Outlet} from 'react-router-dom'

// outlet ka use hum karte hain jab humain uper aur niche ki cheezo ko same rakhna hota h  

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>      
      <Footer/>
    </>
  )
}

export default Layout

import React from 'react'
import HomeNav from '../Navbar/HomeNav'
import Footer from '../Footer/Footer'
import'./HomeLayout.css'

const HomeLayout = ({children}) => {
  return (
    <div className='home-layout'>
    <HomeNav/>
    <main>
    {children}
    </main>
    <Footer/>
    </div>
  )
}

export default HomeLayout
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {

    const [open, setOpen]= useState(false)
    const toggle = ()=>{
        setOpen(!open)
    }
  return (
    <div className='md:bg-transparent rounded-2xl bg-gray-800'>
        <nav className="hidden md:block">
            <ul className="flex gap-10 items-center justify-end text-white text-xl font-semibold">
                <NavLink to={'/'} className={({isActive})=> `${isActive ? "text-[#ff8c40]" : "text-white"} cursor-pointer`}><li>ABOUT</li></NavLink>
                <NavLink to={'/projects'} className={({isActive})=> `${isActive ? "text-[#ff8c40]" : "text-white"} cursor-pointer`}><li>PROJECTS</li></NavLink>
                <NavLink to={'/contact'} className={({isActive})=> `${isActive ? "text-[#ff8c40]" : "text-white"} cursor-pointer`}><li>CONTACT</li></NavLink>
            </ul>
        </nav>
        <div className="flex justify-between items-center text-xl md:hidden !px-5">
            <img src={Logo} alt="Logo" className='w-20' />
            {
                open ? <RxCross2 className='transition-all duration-500 ease-in-out text-[#ff8c40] w-10 h-10 cursor-pointer' onClick={toggle}/> : <HiMenuAlt1 className='transition-all duration-500 ease-in-out text-[#ff8c40] w-10 h-10' onClick={toggle}/>
            }
        </div>
        <ResponsiveMenu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Navbar

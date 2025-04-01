import React from 'react'
import profileImg from "../assets/Profile Image.png"
import RESUME from '../assets/Abhishek_Kumar_Resume.pdf'
import { FaRegEnvelope } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";


const SideBar = () => {
  return (
    <div className='bg-[#067883] rounded-xl !m-5 hidden md:block h-[95vh] w-[350px]'>
      <div className='bg-[#067883] rounded-md !p-4'>
        <div className="rounded-xl !p-3 flex items-center justify-center">
            <img src={profileImg} alt="Profile Picture" className='h-40 bg-[#00968e] rounded-3xl' />
        </div>
        <h1 className="text-white font-bold text-center text-2xl !my-2">ABHISHEK KUMAR</h1>
        <p className='text-white bg-[#00968e] rounded-md !py-2 text-center !mx-4 !mb-7'>MERN Stack Developer</p>
        <hr className="text-[#00968e] !mx-4 border-2" />
        <div className="!mt-7 !px-4 !space-y-4">

            {/* Email Details */}
            <div className="flex gap-3 items-center">
                <div className="bg-[#00968e] !p-2 rounded-md shadow">
                    <FaRegEnvelope className='text-[#ff8c40] text-2xl'/>
                </div>
                <div className="text-white">
                    <h1 className='font-semibold'>EMAIL</h1>
                    <p className='text-[#95b0b4]'>devabhixak@gmail.com</p>
                </div>
            </div>

            {/* Birth Date Details */}
            <div className="flex gap-3 items-center">
                <div className="bg-[#00968e] !p-2 rounded-md shadow">
                    <SlCalender className='text-[#ff8c40] text-2xl'/>
                </div>
                <div className="text-white">
                    <h1 className='font-semibold'>BIRTHDAY</h1>
                    <p className='text-[#95b0b4]'>21 March, 2003</p>
                </div>
            </div>

            {/* Location details */}
            <div className="flex gap-3 items-center">
                <div className="bg-[#00968e] !p-2 rounded-md shadow">
                    <FaLocationDot className='text-[#ff8c40] text-2xl'/>
                </div>
                <div className="text-white">
                    <h1 className='font-semibold'>LOCATION</h1>
                    <p className='text-[#95b0b4]'>Mohali, Punjab, India</p>
                </div>
            </div>

            {/* Resume Details */}
            <div className="flex gap-3 items-center">
                <div className="bg-[#00968e] !p-2 rounded-md shadow">
                    <IoDocumentTextOutline className='text-[#ff8c40] text-2xl'/>
                </div>
                <a href={RESUME} className="text-white">
                    <h1 className='block font-semibold'>RESUME</h1>
                    <p className='text-[#00a9c5] hover:text-[#95b0b4] [transition:.5s_ease]'>Click to Download Resume</p>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar

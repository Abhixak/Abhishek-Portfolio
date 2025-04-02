import React from "react";
import profileImg from "../assets/Profile Image.png";
import RESUME from "../assets/Abhishek_Kumar_Resume.pdf";
import { NavLink } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <div
  className={`fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-gray-800 !pb-6 !px-4 !pt-6 text-black md:hidden rounded-r-xl shadow-md transition-all duration-500 ease-in-out ${
    open ? "left-0" : "-left-full"
  }`}
>

      <div className="bg-[#067883] rounded-md !p-4">
        <div className="rounded-xl !p-3 flex items-center justify-center">
          <img
            src={profileImg}
            alt="Profile Picture"
            className="h-30 bg-[#00968e] rounded-3xl"
          />
        </div>
        <h1 className="text-white font-bold text-center text-xl !my-2">
          ABHISHEK KUMAR
        </h1>
        <p className="text-white bg-[#00968e] rounded-md !py-2 text-center !mx-4 !mb-7">
          MERN Stack Developer
        </p>
        <hr className="text-[#00968e] !mx-4 border-2" />

        <nav className="!mt-5">
          <ul className="flex flex-wrap text-center gap-2 items-center justify-center text-white text-l font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-[#ff8c40]" : "text-white"} cursor-pointer`
              }
            >
              <li>ABOUT</li>
            </NavLink>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                `${isActive ? "text-[#ff8c40]" : "text-white"} cursor-pointer`
              }
            >
              <li>PROJECTS</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isActive ? "text-[#ff8c40]" : "text-white"} cursor-pointer`
              }
            >
              <li>CONTACT</li>
            </NavLink>
          </ul>
        </nav>
        <div className="!mt-7 !px-4 !space-y-4">
          {/* Email Details */}
          <div className="flex gap-3 items-center">
            <div className="bg-[#00968e] !p-2 rounded-md shadow">
              <FaRegEnvelope className="text-[#ff8c40] text-2xl" />
            </div>
            <div className="text-white w-[250px]">
              <h1 className="font-semibold">EMAIL</h1>
              <p className="text-[#95b0b4] break-all">devabhixak@gmail.com</p>
            </div>
          </div>

          {/* Birth Date Details */}
          <div className="flex gap-3 items-center">
            <div className="bg-[#00968e] !p-2 rounded-md shadow">
              <SlCalender className="text-[#ff8c40] text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">BIRTHDAY</h1>
              <p className="text-[#95b0b4]">21 March, 2003</p>
            </div>
          </div>

          {/* Location details */}
          <div className="flex gap-3 items-center">
            <div className="bg-[#00968e] !p-2 rounded-md shadow">
              <FaLocationDot className="text-[#ff8c40] text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="font-semibold">LOCATION</h1>
              <p className="text-[#95b0b4]">Mohali, Punjab, India</p>
            </div>
          </div>

          {/* Resume Details */}
          <div className="flex gap-3 items-center">
            <div className="bg-[#00968e] !p-2 rounded-md shadow">
              <IoDocumentTextOutline className="text-[#ff8c40] text-2xl" />
            </div>
            <a href={RESUME} className="text-white">
              <h1 className="block font-semibold">RESUME</h1>
              <p className="text-[#00a9c5] hover:text-[#95b0b4] [transition:.5s_ease]">
                Click to Download Resume
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;

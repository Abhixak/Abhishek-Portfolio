import React from "react";
import Navbar from "./Navbar";
import profileImg from "../assets/Profile Image.png";
import {service} from './data.jsx';

const About = () => {
  return (
    <div className="md:rounded-xl bg-[#067883] md:!m-5 flex-1 !p-7">
      <Navbar />
      <div className="!mt-7">
        <h1 className="text-white font-bold text-2xl !mb-2">ABOUT</h1>
        <hr className="border-3 text-[#ff8c40] w-12  rounded-4xl" />
        <div className="!mt-5 md:hidden flex justify-center">
          <img
            src={profileImg}
            alt="Profile Image"
            className="bg-[#00968e] rounded-3xl h-[50vw]"
          />
        </div>
          <p className="!mt-4 text-white text-l font-semibold">
            I am <span className="text-[#ff8c40]">Abhishek Kumar</span> a passionate <span className="text-[#ff8c40]">MERN stack developer</span> with expertise in building
            scalable and dynamic web applications. With a strong foundation in
            MongoDB, Express.js, React, and Node.js, I develop seamless and
            efficient solutions that enhance user experience.
            <br />
            My experience
            includes building full-stack applications, API development, database
            management, and integrating modern front-end frameworks. I am always
            eager to explore new technologies and improve my skills to stay
            ahead in the ever-evolving world of web development.
          </p>
          <h1 className="text-2xl text-white font-bold !mt-7">What I'm Doing</h1>
          <div className="grid md:grid-cols-2 gap-6 !mt-7">
            {
              service.map((item,index)=>{
                return <div className="bg-[#00968e] shadow !p-5 text-white flex gap-5 items-start rounded-xl" key={index}>
                  <div className="text-7xl text-[#ff8c40]">
                    {item.logo}
                  </div>
                  <div>
                    <h1 className="font-bold text-xl md:text-l ">{item.title}</h1>
                    <p className="text-md md:text-l text-gray-300">{item.desc}</p>
                  </div>
                </div>
              })
            }
          </div>
        
      </div>
    </div>
  )
}

export default About;

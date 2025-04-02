import React from 'react'
// import {createHashRouter, RouterProvider} from 'react-router-dom'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

// const routes=createHashRouter([
//   {
//     path:"/",
//     element:<About/>
//   },
//   {
//     path:"/projects",
//     element:<Projects/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   }
// ])

const App = () => {
  return (
    <div className='flex'>
      <SideBar/>
      {/* <RouterProvider router={routes} /> */}
      <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App

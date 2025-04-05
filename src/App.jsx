<<<<<<< HEAD
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
=======
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SideBar from './components/SideBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<About/>
  },
  {
    path:"/projects",
    element:<Projects/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])

const App = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
>>>>>>> 5e16a8845e0c4f9aafc98323438a7affe6679b74

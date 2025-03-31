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

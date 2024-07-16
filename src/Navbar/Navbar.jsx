import React from 'react'
import { Link  } from 'react-router-dom'
export default function Navbar() {
  return (

    <nav className=" navbar-expand-lg ">
    <div className="w-100 ">
        <div className="navbar-nav w-100 py-2 mb-3 d-flex align-items-center justify-content-between test "> 
      <Link className=' NavCss ms-2' to="Task"> <h3 className='ms-5 NavCss'> Task</h3> </ Link>
        </div>
      </div>
  
  </nav>
 
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/post/pid'>Post</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Log In</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>Sign Up</NavLink>
        </li>
        <li>
          <NavLink to='/topic/topic_name'>Topic</NavLink>
        </li>
      </nav>
    </div>
  )
}

export default Navbar

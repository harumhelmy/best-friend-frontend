import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' >
      <div className='navbar-end'> 
          <Link to='/home' className='navbar-item'>home</Link> 
          <Link to='/friends' className='navbar-item'>friends</Link>
          <Link to='/about' className='navbar-item'>about bestFriend</Link>
      </div>
    </div>
  )
}

export default Navbar
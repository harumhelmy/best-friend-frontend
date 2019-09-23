import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' >
      <div className='navbar-menu'> 
          <Link to='/home' className='navbar-item'>home</Link> 
          <Link to='/friends' className='navbar-item'>friends</Link>
      </div>
    </div>

  )
}

export default Navbar
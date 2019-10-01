import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar is-spaced' >
      <div className='navbar-brand'>
        <Link to='/home'>
          <img 
            src={require('../images/pineapple_logo.png')} 
            alt='an illustration of four people hanging out' 
            style={{width: 50, height: 50}}
          />
        </Link>
      </div>
          <Link to='/home' className='navbar-item'>
              home</Link> 
          <Link to='/friends' className='navbar-item'>friends</Link>
          <Link to='/calendar' className='navbar-item'>calendar</Link>
          <Link to='/about' className='navbar-item'>about bestFriend</Link>
    </div>
  )
}

export default Navbar
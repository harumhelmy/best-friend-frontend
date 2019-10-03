import React, {Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loggingOut } from '../redux/actions/index'

const Navbar = (props) => {

  const logout = () => {
    localStorage.clear()
    props.loggingOut()
    props.history.push('/about')
  }

  return (
    <div className='navbar is-spaced' >
      <div className='navbar-brand'>
        <h2>best</h2>
      <Link to='/about'>
            <img 
              src={require('../images/pineapple_logo.png')} 
              alt='an illustration of four people hanging out' 
              style={{width: 50, height: 50}}
            />
          </Link>
          <h2>friend</h2>
      </div>
      <div className='navbar-end'>
          
          
        {
          props.currentUser.username ?
          <Fragment>
            <Link to='/home' className='navbar-item'>
              home</Link> 
            <Link to='/friends' className='navbar-item'>friends</Link>
            <Link to='/calendar' className='navbar-item'>calendar</Link>
            <Link to='/about' className='navbar-item'>about bestFriend</Link>
            <a className='navbar-item'
            style={{textDecoration: 'underline'}}
            onClick={logout}>logout</a>
          </Fragment>
          :
          <Fragment>
            <Link to='/about' className='navbar-item'>about bestFriend</Link>
            <Link to='/login' className='navbar-item'>
              login</Link>
          </Fragment>
          
        }
          
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loggingOut: () => {dispatch(loggingOut())}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
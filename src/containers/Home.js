import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return(
    <Fragment>
      {
        props.currentUser.username ?
      <div className='container'>
        <div className='hero'>
          <h1 className='title'>Hi, {props.currentUser.username}! Welcome to bestFriend. </h1>
        </div>
        <div className='columns'>
          <div className='column'>
          <Link to='/newfriend'><h3>add a new friend</h3></Link>
          <br/> 
          <Link to='/friends'><h3>see all your friends :)</h3></Link>
          </div>
          <div className='column'>
            <img 
              src={require('../images/undraw_horror_movie.svg')} 
              alt='an illustration of four people hanging out' 
              style={{width: 500, height: 500}}
            />
          </div>
        </div>
      </div>
      :
      null
      }
    </Fragment>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)

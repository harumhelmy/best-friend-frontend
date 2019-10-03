import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const About = (props) => {
  return (
    <div className="columns is-mobile">
        <div className="column is-5 is-offset-1">
          <img 
            src={require('../images/undraw_happy_women.svg')} 
            alt='an illustration of four people hanging out' 
            style={{width: 500, height: 500}}
          />
        </div>
        <div className='column'>
          <h3 className='title'>connections and friendships keep us going.</h3>
            <br/>
            <div className='container'>
              bestFriend wants you to be the best friend that you can be! <br/><br/>use our app to reflect on what you appreciate about your friends,
              keep track of the last time you interacted, and get reminders of important dates. 
              <br/>
              <br/>
              <br/>
            </div>
            {
              !props.currentUser.username ?
            <div className='container'>
              <Link to='/signup'><strong>create an account</strong></Link> / <Link to='/login'><strong>login</strong></Link>
            </div>
            :
            null
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

export default connect(mapStateToProps)(About)
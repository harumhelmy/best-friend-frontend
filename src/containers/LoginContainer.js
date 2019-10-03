import React, {Fragment, Component} from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import {withRouter} from 'react-router-dom'

class LoginContainer extends Component {
  render(){
    return (
      <Fragment>
        <div className='columns is-mobile'>
          <div className='column is-half is-offset-one-quarter'>
            <h3>Already have an account?</h3>
            <Login />
          </div>
        </div>
        <div className='columns is-mobile'>
          <div className='column is-half is-offset-one-quarter'>
            <h3>Don't already have an account?</h3>
            <br/>
            <Signup />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(LoginContainer)
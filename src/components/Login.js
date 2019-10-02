import React, {Fragment, Component} from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { userLoginFetch } from '../redux/actions/index'

class Login extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  } 
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
  }

  render (){
    return (
      <Fragment>
        <h3>Login please</h3>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" 
                  type="text" 
                  name='username'
                  placeholder="Your username pls"
                  onChange={this.handleChange} 
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" 
                  type="password" 
                  name='password'
                  placeholder="password"
                  onChange={this.handleChange} 
                />
              </div>
            </div>

            <button type='submit' className='ui button'>Login</button>
          </form>
        </div> 
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(Login)
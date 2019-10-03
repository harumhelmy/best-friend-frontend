import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userPostFetch } from '../redux/actions/index'

class Signup extends Component {

  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <div className='columns'>
        <div className='column is-half is-offset-one-quarter'>
          <h3>create a bestFriend account &hearts;</h3>
          <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">username</label>
                  <div className="control">
                    <input className="input" 
                      type="text" 
                      name='username'
                      placeholder="pick a username pls"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">email</label>
                  <div className="control">
                    <input className="input" 
                      type="text" 
                      name='email'
                      placeholder="your email pls"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">password</label>
                  <div className="control">
                    <input className="input" 
                      type="password" 
                      name='password'
                      placeholder="password"
                      onChange={this.handleChange} 
                    />
                  </div>
                </div>

                <button type='submit' 
                  className='ui button'> Sign up
                </button>
          </form>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    userPostFetch: user => dispatch(userPostFetch(user))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Signup))
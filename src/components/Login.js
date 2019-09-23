import React from 'react'

const Login = () => {

  return (
    <div>
      <h3>Login please</h3>
      <div className='container'>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your username pls" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="password" />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Login
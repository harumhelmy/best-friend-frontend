import React from 'react'

const About = () => {
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
          <div className='container'>
          <h3 className='title'>Connections and friendships keep us going.</h3>
            <br/>
            <div className='container'>
              bestFriend wants you to be the best friend that you can be! <br/><br/>Use our app to reflect on what you appreciate about your friends,
              keep track of the last time you interacted, and get reminders of important dates. 
            </div>
          </div>
        </div>
    </div>
  )
}

export default About 
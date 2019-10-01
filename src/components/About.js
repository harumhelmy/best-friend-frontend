import React from 'react'

const About = () => {
  return (
    <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
        <img 
          src={require('../images/undraw_happy_women_day_fbjt.svg')} 
          alt='an illustration of four people hanging out' 
          style={{width: 500, height: 500}}
        />
        <br/>
        Connections and friendships keep us going. 
        <br/>
        Best Friend wants you to be the best friend that you can be! Reflect on what you appreciate about your friends,
        keep track of the last time you interacted, and get reminders of important dates. 
        </div>
    </div>
  )
}

export default About 
import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return(
    <Fragment>
      <div>
        <h3>Hi, {props.currentUser.username}! Welcome to bestFriend. </h3>
        <Link to='/newfriend'>add a new friend</Link>
        <br/>
        <Link to='/friends'>see all your friends :)</Link>
      </div>
      {/* <img 
          src={require('../images/undraw_horror_movie_3988.svg')} 
          alt='an illustration of four people hanging out' 
          style={{width: 200, height: 200, justifyContent: 'flex-end'}}
        /> */}
    </Fragment>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)

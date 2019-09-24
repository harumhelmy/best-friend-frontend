import React from 'react';
import { connect } from 'react-redux'

const Home = (props) => {
  
    return(
      <div>
        <h3>welcome to bestFriend, {props.currentUser.username}! this your home page. </h3>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)

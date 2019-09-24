import React from 'react';
import { connect } from 'react-redux'
import NewFriendForm from '../modals/NewFriendForm'

const Home = (props) => {
  
    return(
      <div>
        <h3>welcome to bestFriend, {props.currentUser.username}! this your home page. </h3>
        <NewFriendForm />
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)

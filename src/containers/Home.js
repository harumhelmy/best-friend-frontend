import React from 'react';
import { connect } from 'react-redux'
import NewFriendForm from '../modals/NewFriendForm'
import NewImportantDate from '../modals/NewImportantDate'
import NewNoteForm from '../modals/NewNoteForm'

const Home = (props) => {
  
    return(
      <div>
        <h3>welcome to bestFriend, {props.currentUser.username}! this your home page. </h3>
        <NewFriendForm />
        <NewImportantDate />
        <NewNoteForm />
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)

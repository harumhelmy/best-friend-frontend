import React from 'react';
import { connect } from 'react-redux'
import NewFriendForm from '../modals/NewFriendForm'
import NewImportantDate from '../modals/NewImportantDate'
import NewNoteForm from '../modals/NewNoteForm'
import NewInteractionForm from '../modals/NewInteractionForm'

const Home = (props) => {
    return(
      <div>
        <h3>welcome to bestFriend, {props.currentUser.username}! this your home page. </h3>
        <NewFriendForm />
        <br />
        <NewImportantDate />
        <br />
        <NewNoteForm />
        <br />
        <NewInteractionForm />
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home)

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' // will have to figure this out

const FriendCard = (props) => {
  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>{props.friend.name}</p>
        <div className='card-content'>
          {props.friend.pronouns}
        </div>
      </header>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    friends: state.friends
  }
}

export default connect(mapStateToProps)(FriendCard)

import React from 'react'
import { Link, withRouter } from 'react-router-dom' // will have to figure this out
import { connect } from 'react-redux'

const FriendCard = (props) => {

  return (
    <Link to={`/friends/${props.friend.id}`}>
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>{props.friend.name}</p>
        <div className='card-content'>
          {props.friend.pronouns}
        </div>
      </header>
    </div>
    </Link>
  )
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     friend: state.friends.find(
//       friend => friend.id === ownProps.match.params.friendId
//     )
//   }
// }

// export default withRouter(connect(mapStateToProps)(FriendCard))
export default FriendCard

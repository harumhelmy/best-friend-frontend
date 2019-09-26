import React from 'react';
import FriendCard from '../components/FriendCard'
import { connect } from 'react-redux'

class FriendsContainer extends React.Component{
  
  render(){
    return(
      <div className='container'> 
        <h2>this is the friends index!</h2>

        <h3>friend list:</h3>
        {
          this.props.friends.map( friend => <FriendCard key={`friend-${friend.id}`} friend={friend} /> )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    friends: state.friends
  }
}

export default connect(mapStateToProps)(FriendsContainer)
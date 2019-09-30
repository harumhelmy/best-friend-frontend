import React from 'react';
import FriendCard from '../components/FriendCard'
import { connect } from 'react-redux'

class FriendsContainer extends React.Component{
  
  render(){
    return(
      <div className='container'> 
        <h2>here's everyone! &hearts;</h2>

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
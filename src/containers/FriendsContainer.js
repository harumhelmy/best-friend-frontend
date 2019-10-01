import React, {Fragment} from 'react';
import FriendCard from '../components/FriendCard'
import { connect } from 'react-redux'

class FriendsContainer extends React.Component{
  
  render(){
    return(
    <Fragment>
      <div className='container'>
        <h2>here's everyone! &hearts;</h2>
      </div>

      <div className='container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
    

        <div className='columns is-multiline'>

        {
          this.props.friends.map( friend => <FriendCard key={`friend-${friend.id}`} friend={friend} /> )
        }
        </div>

      </div>
    </Fragment>
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
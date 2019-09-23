import React from 'react';
import FriendCard from '../components/FriendCard'
import { connect } from 'react-redux'
import { fetchingFriends } from '../redux/actions/index'

class FriendsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchingFriends()
  }

  render(){
    return(
      <div> 
        <h2>this is the friends index!</h2>
        <h3>friend list:</h3>
        {
          this.props.friends.map( friend => <div className='column is-4'> <FriendCard friend={friend} /> </div>)
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingFriends: () => { dispatch(fetchingFriends()) }
  }
}

// when setting up state, set initial value!!!!!!!
// one suggestion is to conditionally map
// life will be easier to un-nest from the user state 
// pull it out of the user state [].map( )

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)
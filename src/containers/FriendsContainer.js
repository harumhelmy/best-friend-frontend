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

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)
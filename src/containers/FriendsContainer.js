import React, {Fragment} from 'react';
import FriendCard from '../components/FriendCard'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class FriendsContainer extends React.Component{
  
  render(){
    return(
    <Fragment>
      { 
        this.props.friends.length === 0 ?
        <Fragment>
          <h2>start adding friends! &hearts; </h2>
          <Link to='/newfriend'>add a new friend</Link>
        </Fragment>
        :
        <Fragment>
      <div className='container'>
        <h2>here's everyone! &hearts;</h2>
      </div>

      <div className='container' 
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 

        <div className='columns is-multiline'>
          {
            this.props.friends.map( friend => <FriendCard 
                key={`friend-${friend.id}`} 
                friend={friend} /> )
          }
        </div>
      </div>
      </Fragment>
      }
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
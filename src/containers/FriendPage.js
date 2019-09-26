import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Appreciation from '../components/Appreciation'

class FriendPage extends React.Component {
  render(){
    return (
    <div>
      <h2>{this.props.friend.name}</h2>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    friend: state.friends.find(
      friend => friend.id === parseInt(ownProps.match.params.friendId)
    )
  }
}

export default withRouter(connect(mapStateToProps)(FriendPage))

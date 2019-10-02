import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

class FriendCard extends React.Component {

  getFriendInteractions = () => {
    if (this.props.interactions){
      return this.props.interactions.filter( interaction => 
        interaction.friend_id === parseInt(this.props.friend.id))
    }
  }

  getMostRecentInteraction = () => {
    const copy = [...this.getFriendInteractions()].map( interaction => ({
      ...interaction,
      date: new Date(interaction.date)
    }))
    copy.sort((a,b) => a.date - b.date)
    return copy[copy.length-1]
  }

  render(){
    const {id, name, pronouns} = this.props.friend
    return (
      <div className='column is-3'>
        <Link to={`/friends/${id}`}
          style={{ textDecoration: 'none' }}>
          <div className='box'>
              <strong>{name}</strong>
                <br />
                <small>{pronouns}</small>
              {
                this.getMostRecentInteraction() ?
                <p> Last interaction with {name} was <br/> 
                  {moment(this.getMostRecentInteraction().date).fromNow()}
                </p>
                : null
              }
              </div>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interactions: state.interactions
  }
}

export default connect(mapStateToProps)(FriendCard)

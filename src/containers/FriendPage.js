import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Appreciation from '../components/Appreciation'
// import InteractionsContainer from '../containers/InteractionsContainer'

class FriendPage extends React.Component {

  render(){

   const friendPage = () => {
     if (this.props.friend) {
       const { name, interactions, notes, important_dates, appreciation } = this.props.friend
       return (
      <div>
         <h1>{name}</h1>
         <h3>Here's what you appreciate about {name} &hearts; </h3>
          <p>{appreciation}</p>
         <h3>interactions</h3>
          { {interactions} ? interactions.map( interaction => <div><li>{interaction.date}</li></div>)  : null }
         <h3>notes</h3>
          { {notes} ? notes.map(note => <div><p>{note.content}</p></div>) : null }
         <h3>important dates</h3>
          { {important_dates} ? important_dates.map( date => <div><p>{date.date}</p></div> ) : null }
      </div>
       )
     }
   }

    return (
    <div>
      {friendPage()}
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

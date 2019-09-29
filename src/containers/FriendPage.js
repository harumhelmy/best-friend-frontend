import React from 'react'
import { withRouter, Link  } from 'react-router-dom'
import { connect } from 'react-redux'
import Appreciation from '../components/Appreciation'
import EdiText from 'react-editext'
import { deletingFriend, updatingFriend } from '../redux/actions/index'
// import InteractionsContainer from '../containers/InteractionsContainer'

class FriendPage extends React.Component {

  /* on each save instance methods/functions below, the order of the key value pairs of passed in info matters, because the dynamic redux actions that updates this information on the front-end depends on the attribute key being updated to be the first in the array! */

  onSave = (value, event) => {
    console.log(event)
    const info = {
      appreciation: value,
      friendId: this.props.friend.id
    }
    this.props.updatingFriend(info)
  }

  nameSave = (value) => {
    const info = {
      name: value, 
      friendId: this.props.friend.id
    }
    this.props.updatingFriend(info)
  }

  pronounsSave = (value) => {
    const info = {
      pronouns: value,
      friendId: this.props.friend.id
    }
    this.props.updatingFriend(info)
  }

  render(){
   const friendPage = () => {
     if (this.props.friend)  {
       const { id, name, interactions, pronouns, notes, important_dates, appreciation } = this.props.friend
       return (
      <div className='container'>
         <h1>{ 
         <EdiText type='text' 
            value={name}
            inputProps={{
              className: 'input'
            }}
            onSave={this.nameSave}
          /> }
         </h1>
         <EdiText type='text'
          value={pronouns}
          onSave={this.pronounsSave}
         />
         <h3>here's what you appreciate about {name} &hearts; </h3>

          <EdiText type='textarea' 
            inputProps={{
              className: 'textarea',
              style: {
                outline: 'none',
                minWidth: 'auto'
              }
            }}
            value={appreciation}
            onSave={this.onSave}
          />

         <h3>interactions</h3>
          { interactions.map( interaction => <div><li>{interaction.date}</li></div>)  }
         <h3>notes</h3>
          { notes.map(note => <div><p>{note.content}</p></div>)  }
         <h3>important dates</h3>
          { important_dates.map( date => <div><p>{date.date}</p></div> ) }
          <br />
          <br />
          <button className='button is-small is-warning' 
            onClick={()=>this.props.deletingFriend(id)}>
              delete this friend
          </button>
          
      </div>
       )
     }
   }

    return (
    <div>
      {friendPage()}
      <br/>
      <Link to='/friends'>Back to friends list</Link>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updatingFriend: (info) => {dispatch(updatingFriend(info))},
    deletingFriend: (friendId) => {dispatch(deletingFriend(friendId)); ownProps.history.push('/friends');}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendPage))

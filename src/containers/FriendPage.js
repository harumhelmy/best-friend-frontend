import React, {Fragment} from 'react'
import { withRouter, Link  } from 'react-router-dom'
import { connect } from 'react-redux'
import EdiText from 'react-editext'
import { deletingFriend, updatingFriend } from '../redux/actions/index'
import Moment from 'react-moment'
import Note from '../components/Note'
import Interaction from '../components/Interaction'

class FriendPage extends React.Component {

  // on each onSave instance methods/functions below, the order of the 
  // key value pairs of the info object that we are passing to the 
  // dispatch matters, because the dynamic redux actions that updates
  // this information on the front-end depends on the attribute key 
  // being updated to be the first one! 

  onSave = (value) => {
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
       const { id, name, pronouns, notes, important_dates, appreciation } = this.props.friend 
       return (
      <Fragment>

        <section className='hero'>
          <div className='hero-body'>
            <h1 className='title'>
              <EdiText type='text' 
                  value={name}
                  inputProps={{
                    className: 'input'
                  }}
                  onSave={this.nameSave}
                  editButtonClassName="fas fa-pencil-alt"
                /> 
            </h1>

            <EdiText type='text'
              value={pronouns}
              onSave={this.pronounsSave}
              editButtonClassName="fas fa-pencil-alt"
            />

          </div>
        </section> 
        
        <section className='container'>
          <br/>

         <div className='columns'>
           <div className='column is-6'>

              <div className='box'>
                <h3>interactions</h3>
                { 
                  this.props.interactions.map( interaction => 
                    <Interaction interaction={interaction} />)
                }
                  <br/>
                <Link to={`/friends/${id}/newinteraction`}> add a new interaction </Link>
              </div>

              <div className='box'>
                <h3>important dates</h3>
                { this.props.importantDates.map( date => <div><li>{date.date}<p>{date.title}</p></li></div> ) }
                
                <br />
                <Link to={`/friends/${id}/newimpdate`}> add a new important date </Link>
              </div>

              <br />
              <br />
          </div>

           <div className='column is-6'>
            <div className='box'>
              <div className='content'>
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
                  editButtonClassName="fas fa-pencil-alt"
                />
              </div>
              </div>

              <div className='box'>
                <h3>notes</h3>
                { 
                  notes.map(note => 
                    <Note key={`note-${note.id}`}
                    note={note} 
                  /> )  
                }
                <br />
                <Link to={`/friends/${id}/newnote`}> add a new note about {name} </Link>
              </div>

            </div>
          </div>
                  
          <button className='button is-small is-warning' 
            onClick={()=>this.props.deletingFriend(id)}>
              delete this friend
          </button>
        </section> 
      </Fragment>
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
      friend: state.friends.find( friend => 
        friend.id === parseInt(ownProps.match.params.friendId)
      ),
      interactions: state.interactions.filter( interaction => 
        interaction.friend_id === parseInt(ownProps.match.params.friendId)
      ),
      importantDates: state.importantDates.filter( date => 
        date.friend_id === parseInt(ownProps.match.params.friendId)
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

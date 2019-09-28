import React from 'react'
import { withRouter, Link  } from 'react-router-dom'
import { connect } from 'react-redux'
import Appreciation from '../components/Appreciation'
import EdiText from 'react-editext'
import { updatingAppreciation } from '../redux/actions/index'
// import InteractionsContainer from '../containers/InteractionsContainer'

class FriendPage extends React.Component {

  onSave = (val) => {
    const info = {
      appreciation: val,
      friendId: this.props.friend.id
    }
    this.props.updatingAppreciation(info)
  }

  render(){

   const friendPage = () => {
     if (this.props.friend)  {
       const { name, interactions, notes, important_dates, appreciation } = this.props.friend
       return (
      <div className='container'>
         <h1>{name}</h1>
         <h3>Here's what you appreciate about {name} &hearts; </h3>

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

const mapDispatchToProps = (dispatch) => {
  return {
    updatingAppreciation: (info) => {dispatch(updatingAppreciation(info))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendPage))

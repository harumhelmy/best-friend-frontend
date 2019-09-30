import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import { addingNewNote } from '../redux/actions'

class NewNoteForm extends React.Component {

  constructor(){
    super()
    this.state = {
      content: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const data = {
      userId: this.props.currentUser.id,
      content: this.state.content,
      friendId: this.props.friend.id
    }
    this.props.addingNewNote(data)
    this.props.history.push(`/friends/${this.props.friend.id}`)
  }
  
  render(){
    return (
      
      <Fragment>
        {
          this.props.friend ?
          <div class="columns is-mobile">
            <div class="column is-three-fifths is-offset-one-fifth">
              <h2>{`got something on your mind about ${this.props.friend.name}?`}</h2>
              <form onSubmit={this.onSubmit}>

              <label>{`add a note!`}</label>
                <textarea className='textarea'
                  type="text" 
                  name="content"
                  placeholder={`what makes ${this.props.friend.name} tick? what's their favorite food?`}
                  value={this.state.content}
                  onChange={this.handleChange}
                />

                <button type='submit'
                  className='ui button'> Submit
                </button>

              </form>
            </div>
          </div>
        :
        null
        }
      </Fragment>
      
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    friend: state.friends.find(
      friend => friend.id === parseInt(ownProps.match.params.friendId)
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addingNewNote: (data) => { dispatch( addingNewNote(data) ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteForm)
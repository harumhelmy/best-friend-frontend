import React, {Fragment} from 'react';
import { connect } from 'react-redux'

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
      content: this.state.content
      // selectedFriend 
    }
    this.props.addingNewNote(data)
  }
  
  render(){
    return (
      <Fragment>
        <form>
        <label>got a note about your friend?</label>
          <textarea className='textarea'
            type="text" 
            name="content"
            placeholder="friends?"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
    // selectedFriend: need to dynamically render this
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addingNewNote: (data) => { dispatch( addingNewNote(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteForm)
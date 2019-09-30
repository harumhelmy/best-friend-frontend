import React, {Fragment} from 'react';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";  
import { addingNewInteraction } from '../redux/actions'


class NewInteractionForm extends React.Component {

  constructor(){
    super()
    this.state = {
      date: new Date(),
      note: ''
    }
  }

  handleDateChange = (date) => {
    this.setState({
      date: date
    })
  }

  handleChange = (event) => {
    this.setState({
      note: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const data = {
      date: this.state.date,
      note: this.state.note,
      userId: this.props.currentUser.id,
      friendId: this.props.friend.id
    }
    this.props.addingNewInteraction(data)
  }

  render (){
    return (
    <Fragment>
      <h2>add a new interaction</h2>
      <form onSubmit={this.onSubmit}>
        <DatePicker name="date"
          selected={this.state.date}
          onChange={this.handleDateChange}
        />
        <label>note about this friend hang:</label>
          <textarea className='textarea'
            type="text" 
            name="note"
            placeholder="what did you do?"
            value={this.state.note}
            onChange={this.handleChange}
          />
        <button type='submit'
          className='ui button'>Submit     
        </button>
      </form>
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
    addingNewInteraction: (data) => { dispatch(addingNewInteraction(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewInteractionForm)

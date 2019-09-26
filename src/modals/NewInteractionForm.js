import React from 'react';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";  


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
      userId: this.props.currentUser.id
      // need friend prop
    }
  }

  render (){
    return (
      <form>
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
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addingNewInteraction: (data) => { dispatch(addingNewInteraction(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewInteractionForm)

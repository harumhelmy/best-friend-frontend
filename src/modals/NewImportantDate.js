import React, {Fragment, Component} from 'react';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";  
import { addingNewImportantDate } from '../redux/actions'

class NewImportantDate extends Component {

  constructor(){
    super()
    this.state = {
      name: '',
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
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const data = {
      name: this.state.name,
      date: this.state.date,
      user_id: this.props.currentUser.id,
      friend_id: 6, // needs a selected friend prop,
      note: this.state.note
    }
    this.props.addingNewImportantDate(data)
  }

  render(){
    return(
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <label>name</label>
          <input className='input'
            type="text" 
            name="name"
            placeholder="what's happening?" 
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>date</label>
          <DatePicker name="date"
            selected={this.state.date}
            onChange={this.handleDateChange}
            // onClickOutside may be useful here 
          />
          <label>note</label>
          <textarea className="textarea"
            placeholder="any notes on this date?"
            name="note"
            onChange={this.handleChange}
          />
          <button type='submit' 
            className='ui button'> Submit
          </button>
        </form> 
      </Fragment>
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
    addingNewImportantDate: (data) => { dispatch( addingNewImportantDate(data) )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewImportantDate)
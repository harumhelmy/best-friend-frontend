import React, {Fragment, Component} from 'react';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";  

class NewImportantDate extends Component {

  constructor(){
    super()
    this.state = {
      name: '',
      date: new Date(),
      note: '',

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

  onSubmit = () => {
    const data = {
      name: this.state.name,
      date: this.state.date,
      user_id: this.props.currentUser.id,
      friend_id: 9, // needs a selected friend prop,
      note: this.state.note
    }
    this.props.addingNewImportantDate(data)
  }

  render(){
    return(
      <Fragment>
        <form>
          <label>name</label>
          <input className='input'
            type="text" 
            name="name"
            placeholder="name" 
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>date</label>
          <DatePicker name="date"
            selected={this.state.date}
            onChange={this.handleChange}
            // onClickOutside may be useful here 
          />

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
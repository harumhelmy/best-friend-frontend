import React, {Component} from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";  
import { deletingImportantDate, updatingImportantDate } from '../redux/actions/index'

class ImportantDateDetail extends Component {
  
  constructor(){
    super()

    this.state = {
      updateFormShown: false,
      date: '',
      title: '',
      note: ''
    }
  }

  componentDidMount(){
    const {date, title, note} = this.props.date
    
    // sets local state to populate edit form 
    this.setState({
      ...this.state,
      date: date,
      title: title,
      note: note
    })
  }

  // shows/hides the form to update an important date
  toggleUpdateForm = () => {
    this.setState({
      updateFormShown: !this.state.updateFormShown
    })
  }

  onUpdateFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDateChange = (date) => {
    this.setState({
      date: date
    })
  }

  handleUpdate = (event, dateId) => {
    event.preventDefault()

    const date = this.state.date
    const title = this.state.title
    const note = this.state.note 

    if (date !== '' | title !== '') {
      const data = {date, title, note, dateId}
      this.props.updatingImportantDate(data) // dispatches redux action 
    } else {
      alert("Oop, the date and title field can't be blank!")
    }
  }

  handleDelete = (dateId) => {
    this.props.deletingImportantDate(dateId)
  }

  render(){
    const {id, date, title, note} = this.props.date
  
    return (
      <div>
        {   
          !this.state.updateFormShown ? 
        <li><strong>{moment(date).format('LL')}</strong> <i 
          className='fas fa-pencil-alt'
          onClick={()=>this.toggleUpdateForm()}>
          </i> <i 
          className='far fa-times-circle'
          onClick={()=>this.handleDelete(id)}>{/*button to delete important date*/}</i> 

          <p>{title}</p>
          <p>{note}</p>
           
          <br />

        </li>
        :
        <div className='container'>
          <h3>editing important date</h3>
  
          <form onSubmit={(event)=>this.handleUpdate(event, id)}>
              <label>title</label>
              <input className='input'
                type="text" 
                name="title"
                placeholder="what's happening?" 
                value={this.state.title}
                onChange={this.onUpdateFormChange}
              />

              <label>date</label>
              <br />
              <DatePicker name="date"
                selected={this.state.date}
                onChange={this.handleDateChange}
              />

              <br />

              <label>note</label>
              <textarea className="textarea"
                placeholder="any notes on this date?"
                name="note"
                value={this.state.note}
                onChange={this.onUpdateFormChange}
              />

              <button type='submit' 
                className='ui button'> save
              </button>
              <button className='button is-normal'
                style={{textDecoration: 'none'}}
                type='button' /* this is here to explicitly tell 
                the browser this button is not a submit button 
                and avoid the console error "Form submission canceled because the form is not connected" */
                onClick={()=>this.toggleUpdateForm()}>cancel
              </button>
              <br/>
          </form>
        </div>
        }
  
      </div> 
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletingImportantDate: dateId => {dispatch(deletingImportantDate(dateId))},
    updatingImportantDate: data => {dispatch(updatingImportantDate(data))}
  }
}

export default connect(null, mapDispatchToProps)(ImportantDateDetail)
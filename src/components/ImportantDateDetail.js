import React, {Component} from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";  
import { deletingImportantDate } from '../redux/actions/index'

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
    this.setState({
      ...this.state,
      date: date,
      title: title,
      note: note
    })
  }

  handleDelete = (dateId) => {
    this.props.deletingImportantDate(dateId)
  }

  toggleUpdateForm = () => {
    this.setState({
      updateFormShown: !this.state.updateFormShown
    })
  }

  // handleUpdate = (dateId) => {
  //   // this.props.updatingImportantDate(dateId)
  // }

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
          <h3>edit this date</h3>
  
          <form onSubmit={this.onSubmit}>
              <label>title</label>
              <input className='input'
                type="text" 
                name="title"
                placeholder="what's happening?" 
                value={this.state.title}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />

              <button type='submit' 
                className='ui button'> save
              </button>
              <button className='button is-normal'
                style={{textDecoration: 'none'}}
                onClick={()=>this.toggleUpdateForm()}>cancel</button>
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
    // updatingImportantDate: dateId => {dispatch(updatingImportantDate(dateId))}
  }
}

export default connect(null, mapDispatchToProps)(ImportantDateDetail)
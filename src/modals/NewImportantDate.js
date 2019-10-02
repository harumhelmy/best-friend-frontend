import React, {Fragment, Component} from 'react';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";  
import { addingNewImportantDate } from '../redux/actions'

class NewImportantDate extends Component {

  constructor(){
    super()
    this.state = {
      title: '',
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
      title: this.state.title,
      date: this.state.date,
      userId: this.props.currentUser.id,
      friendId: this.props.friend.id, 
      note: this.state.note
    }
    this.props.addingNewImportantDate(data)
    this.props.history.push(`/friends/${this.props.friend.id}`)
  }

  render(){
    return(
      <Fragment>
        {
          this.props.friend ?
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth">
            <h2>add a new important date</h2>
            <form onSubmit={this.onSubmit}>
              <label>name</label>
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
                className='ui button'> Submit
              </button>
              <br/>
              
              <Link to={`/friends/${this.props.friend.id}`}>
                <button className='ui button'>{`back to ${this.props.friend.name}'s page`}</button>
              </Link>
              
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
    addingNewImportantDate: (data) => { dispatch( addingNewImportantDate(data) )}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewImportantDate))
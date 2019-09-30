import React, {Fragment} from 'react';
import DatePicker from 'react-datepicker'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
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
    this.props.history.push(`/friends/${this.props.friend.id}`)
  }

  render (){
    return (
    <Fragment>
      {
          this.props.friend ?
      <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
          <h2>{`have you seen/texted/talked to ${this.props.friend.name} lately?`}</h2>
          <form onSubmit={this.onSubmit}>
            <label>when was it?</label>
            <br/>
            <DatePicker name="date"
              selected={this.state.date}
              onChange={this.handleDateChange}
            />
            <br/>
            <label></label>
            <br/>
              <textarea className='textarea'
                type="text" 
                name="note"
                placeholder="what was it like? what did you talk about?"
                value={this.state.note}
                onChange={this.handleChange}
              />
            <button type='submit'
              className='ui button'>Submit     
            </button>

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
    addingNewInteraction: (data) => { dispatch(addingNewInteraction(data))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewInteractionForm))

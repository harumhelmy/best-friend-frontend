import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import { addingNewFriend } from '../redux/actions/index'
import { Redirect, withRouter } from 'react-router-dom'

class NewFriendForm extends React.Component {

  constructor(){
    super()
    this.state = {
      name: '',
      pronouns: '',
      appreciation: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const data = {
      userId: this.props.currentUser.id,
      name: this.state.name,
      pronouns: this.state.pronouns,
      appreciation: this.state.appreciation
    }
    this.props.addingNewFriend(data)
    this.props.history.push('/friends')
  }

  render() {
    return (
   <Fragment>
    <h3>add a new friend</h3>
     <form onSubmit={this.onSubmit}>
          <label>name</label>
          <input className='input'
            type="text" 
            name="name"
            placeholder="name" 
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>pronouns</label>
          <input className='input'
            type="text" 
            name='pronouns'
            placeholder="pronouns"
            value={this.state.pronouns}
            onChange={this.handleChange}
          />
          <label>appreciation</label>
          <textarea className='textarea'
            type="text" 
            name="appreciation"
            placeholder="what do you appreciate about this friend?"
            value={this.state.appreciation}
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
    addingNewFriend: (data) => { dispatch( addingNewFriend(data) ) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewFriendForm))

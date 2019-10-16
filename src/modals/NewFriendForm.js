import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import { addingNewFriend } from '../redux/actions/index'
import { withRouter } from 'react-router-dom'

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
    
    const { name, pronouns, appreciation } = this.state 

    if (name === '') {
      alert("your friend needs a name!")
    } else {
     const data = {
      userId: this.props.currentUser.id,
      name: name,
      pronouns: pronouns,
      appreciation: appreciation
     }
     this.props.addingNewFriend(data)
     this.props.history.push('/friends')
    }   
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
          <h3>add a friend you'd like to stay in touch with</h3>
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
                <br/>
                <a href= "https://www.mypronouns.org/what-and-why" target="_blank">
                    (why are pronouns important?)
                </a>

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
        </div>
      </div>
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
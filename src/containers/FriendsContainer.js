import React, {Fragment} from 'react';
import FriendCard from '../components/FriendCard'
import { connect } from 'react-redux'
import NewFriendForm from '../modals/NewFriendForm'
import { Link } from 'react-router-dom'

class FriendsContainer extends React.Component{
  constructor(){
    super()
    this.state = { isLoading : true }
  }

  componentDidMount(){
    this.setState({ isLoading : false })
  }
  
  render(){
    return(
    <Fragment>
      { this.state.isLoading ? null : 
        this.props.friends.length === 0 ?
        <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
            <h2>start adding friends! &hearts; </h2>
            <NewFriendForm />
          </div>
        </div>
        :
        <Fragment>
        <div className='container'>
          <div className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  here's everyone &hearts;
                </h1>
                <small><Link to='/newfriend'>go here to add a new friend, if you wanna</Link></small>
              </div>
            </div>
          </div>
        </div>

      <div className='container' 
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 

        <div className='columns is-multiline'>
          {
            this.props.friends.length < 2 ?

            this.props.friends.map( friend => {
              return (
              <div className='column is-8'>
              <FriendCard 
                  key={`friend-${friend.id}`} 
                  friend={friend} /> 
              </div> ) 
            })
              :
             this.props.friends.map( friend => {
              return (
              <div className='column is-3'>
              <FriendCard 
                  key={`friend-${friend.id}`} 
                  friend={friend} /> 
              </div> ) 
            })
             
          }
        </div>
      </div>

    
      </Fragment>
      }}
    </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    friends: state.friends
  }
}

export default connect(mapStateToProps)(FriendsContainer)
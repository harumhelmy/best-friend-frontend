import React, {Fragment} from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Signup from './components/Signup'
import About from './components/About'
import FriendPage from './containers/FriendPage'
import FriendsContainer from './containers/FriendsContainer'
import { connect } from 'react-redux'
import { fetchingUser, fetchingFriends } from './redux/actions/index'
import './App.sass' 

class App extends React.Component {

  componentDidMount(){
    this.props.fetchingUser()
    this.props.fetchingFriends()
  }
  
  render(){

    return (
      <Fragment>
        <Navbar />
          <Switch> {/* this very likely needs to be under the component that needs to be rendered at all times */}
            {/* {allFriends} */}
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/friends' component={FriendsContainer} /> 
            <Route exact path='/about' component={About}/>
            <Route exact path='/friends/:friendId' component={FriendPage} />
            <Route exact path='/logout' />
          </Switch>
      </Fragment>
    );

  } 
}

// const mapStateToProps = (state) => {
//   return {
//     friends: state.currentUser.friends
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingUser: () => { dispatch(fetchingUser()) },
    fetchingFriends: () => { dispatch(fetchingFriends()) }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
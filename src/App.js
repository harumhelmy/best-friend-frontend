import React, {Fragment} from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Signup from './components/Signup'
import FriendsContainer from './containers/FriendsContainer'
import { connect } from 'react-redux'
import { fetchingUser } from './redux/actions/index'
import './App.sass' 

class App extends React.Component {

  componentDidMount(){
    this.props.fetchingUser()
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
            {/* <Route exact path='/friends/:id' render={ (props) => {

              }}
            /> */}
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
    fetchingUser: () => { dispatch(fetchingUser()) }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
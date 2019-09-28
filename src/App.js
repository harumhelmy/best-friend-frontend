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
import NewFriendForm from './modals/NewFriendForm'
import NewImportantDate from './modals/NewImportantDate'
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
          <Switch> 
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/friends' component={FriendsContainer} /> 
            <Route exact path='/about' component={About}/>
            <Route exact path='/newfriend' component={NewFriendForm} />
            <Route exact path='/newimportantdate' component={NewImportantDate} />
            <Route exact path='/friends/:friendId' component={FriendPage} />
            <Route exact path='/logout' />
          </Switch>
      </Fragment>
    );
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingUser: () => { dispatch(fetchingUser()) }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
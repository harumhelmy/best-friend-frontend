import React, {Fragment} from 'react';
import './App.scss';
import './App.sass';
import { Route, Switch, withRouter } from 'react-router-dom'
import LoginContainer from './containers/LoginContainer'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import About from './components/About'
import Calendar from './components/Calendar'
import FriendPage from './containers/FriendPage'
import FriendsContainer from './containers/FriendsContainer'
import NewFriendForm from './modals/NewFriendForm'
import NewImportantDate from './modals/NewImportantDate'
import NewNoteForm from './modals/NewNoteForm'
import NewInteractionForm from './modals/NewInteractionForm'
import { connect } from 'react-redux'
import { fetchingUserData } from './redux/actions/index'


class App extends React.Component {

  componentDidMount(){
    this.props.fetchingUserData()
  }
  
  
  render(){
    return (
      <Fragment>
        <Navbar />
          <Switch> 
            <Route exact path='/'
              component={About}/>
            <Route exact path='/login' 
              component={LoginContainer}/>
            <Route exact path='/signup'
              component={Signup}/>
            <Route exact path='/home' 
              component={Home}/>
            <Route exact path='/friends' 
              component={FriendsContainer} /> 
            <Route exact path='/about' 
              component={About}/>
            <Route exact path='/newfriend' 
              component={NewFriendForm} />
            <Route exact path='/calendar'
              component={Calendar} />
            <Route exact path='/friends/:friendId' 
              component={FriendPage} />
            <Route exact path='/friends/:friendId/newimpdate' 
              component={NewImportantDate} />
            <Route exact path='/friends/:friendId/newnote'
              component={NewNoteForm} />
            <Route exact path='/friends/:friendId/newinteraction'
              component={NewInteractionForm} />
            <Route exact path='/logout' />
          </Switch>
      </Fragment>
    );
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingUserData: () => { dispatch(fetchingUserData()) }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
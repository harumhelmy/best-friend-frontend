import React, {Fragment} from 'react';
import './App.scss';
import './App.sass';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
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
import EditImportantDate from './components/EditImportantDate'
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
              render={ () => this.props.currentUser.username ? <Redirect to='/home' /> : <LoginContainer/> } />
            <Route exact path='/signup'
              component={Signup}/>
            <Route exact path='/home' 
              component={Home} />
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
            <Route exact path='/dates/:importantDateId/updateImportantDate'
              component={EditImportantDate} />
            <Route exact path='/logout' />
          </Switch>
      </Fragment>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    friends: state.friends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingUserData: () => { dispatch(fetchingUserData()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
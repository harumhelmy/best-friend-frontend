import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import FriendsContainer from './containers/FriendsContainer'
import store from './redux/store/index' // redux store 

class App extends React.Component {
  
  render(){
    console.log(store.getState())
  return (
    <Fragment>
      <Router>
        <Switch>
        <Navbar />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/friends' render={ () => <FriendsContainer /> } />
          {/* <Route exact path='/friends/:id' render={ (props) => {

            }}
          /> */}
        </Switch>
      </Router>
    </Fragment>
  );

  } 
}

export default App;

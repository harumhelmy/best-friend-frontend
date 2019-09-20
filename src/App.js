import React, {Fragment} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Signup from './components/Signup'
import FriendsContainer from './containers/FriendsContainer'
import store from './redux/store/index' // redux store 
import './App.sass' 

class App extends React.Component {
  
  render(){
    // console.log(store.getState())
  return (
    <Fragment>
       <Navbar />
        <Switch> {/* this very likely needs to be under the component that needs to be rendered at all times */}
      
          <Route path='/signup' component={Signup} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/friends' render={ () => <FriendsContainer /> } /> 
          {/* <Route exact path='/friends/:id' render={ (props) => {

            }}
          /> */}
    
        </Switch>
    </Fragment>
  );

  } 
}

export default App;

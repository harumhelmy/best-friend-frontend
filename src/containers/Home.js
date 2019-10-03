import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ImportantDateDetail  from '../components/ImportantDateDetail'

const Home = (props) => {
    return(
    <Fragment>
      {
        props.currentUser.username ?
      <div className='container'>
        <div className='hero'>
          <h1 className='title'>Hi, {props.currentUser.username}! Welcome to bestFriend. </h1>
        </div>
        <div className='columns'>
          <div className='column'>
            <Link to='/newfriend'><h3>add a new friend</h3></Link>
            <br/> 
            <Link to='/friends'><h3>see all your friends :)</h3></Link>
            <h3>upcoming important dates:</h3>
            {
              props.importantDates ?
              props.importantDates.map( date =>  
                <ImportantDateDetail date={date}/>
              )
              :
              null
            }
          </div>
          <div className='column'>
            <img 
              src={require('../images/undraw_horror_movie.svg')} 
              alt='an illustration of four people hanging out' 
              style={{width: 500, height: 500}}
            />
          </div>
        </div>
      </div>
      :
      null
      }
    </Fragment>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    importantDates: [...state.importantDates].filter( date =>     new Date(date.date) > Date.now()).map( date => ({
        ...date, 
        date: new Date(date.date)
      })).sort((a,b) => a.date - b.date).slice(0,5)
    }
}

export default connect(mapStateToProps)(Home)
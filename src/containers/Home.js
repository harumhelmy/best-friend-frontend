import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DateDetail from '../components/ImpDateDetailHome'

const Home = (props) => {
    return(
    <Fragment>
      {
        props.currentUser.username ?
      <div className='container'>
        <div className='hero'>
          <h1 className='title'>hello, {props.currentUser.username}! </h1>
        </div>
        
        <div className='columns'>
          <div className='column'>
                {
                props.importantDates.length !== 0 
                ?
                <div className='box'>
                  <h3>important friend dates coming up soon:</h3>
                  {props.importantDates.map( date =>  
                    <DateDetail key={date.id} date={date}/>)}
                </div>
                :
                null
                }
            <Link to='/newfriend' 
              className='button is-normal'
              style={{textDecoration: 'none'}}>
                add a new friend
            </Link>
            <br/> 
            <Link to='/friends'
              className='button is-normal'
              style={{textDecoration: 'none'}}>see all your friends :)</Link>
            
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
    importantDates: [...state.importantDates].filter( date => 
      new Date(date.date) > Date.now()).map( date => ({
        ...date, 
        date: new Date(date.date)
      })).sort((a,b) => a.date - b.date).slice(0,5)
    }
}

export default connect(mapStateToProps)(Home)
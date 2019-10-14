import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import { deletingImportantDate } from '../redux/actions/index'

class ImportantDateDetail extends React.Component {
  
  handleClick = (dateId) => {
    this.props.deletingImportantDate(dateId)
  }

  render(){
    const {id, date, title} = this.props.date
  
    return (
      <div>
        <li><strong>{moment(date).format('LL')}</strong> <i 
          className='far fa-times-circle'
          onClick={()=>this.handleClick(id)}></i>      
        <p>{title}</p></li>
      </div> 
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletingImportantDate: dateId => {dispatch(deletingImportantDate(dateId))}
  }
}

// export default ImportantDateDetail
export default connect(null, mapDispatchToProps)(ImportantDateDetail)
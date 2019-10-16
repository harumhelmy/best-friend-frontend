import React, {Component} from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import { deletingInteraction } from '../redux/actions/index'

class Interaction extends Component {

  handleDelete = (id) => {
    this.props.deletingInteraction(id)
  }

  render() {

    const { id, date, note } = this.props.interaction

    return (
      <div>
        <li>
          <strong>{moment(date).fromNow()}</strong> <i 
            className='far fa-times-circle'
            onClick={()=>this.handleDelete(id)}>{/*button to delete important date*/}</i> 
          <p>{note}</p>
        </li>
      </div> 
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletingInteraction: (id) => {dispatch(deletingInteraction(id))}
  }
}

export default connect(null, mapDispatchToProps)(Interaction)
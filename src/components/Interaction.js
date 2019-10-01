import React from 'react'
import {connect} from 'react-redux'
import Moment from 'react-moment'
// import { deletingInteraction } from '../redux/actions/index'

const Interaction = (props) => {

  const { id, date, note, friend_id } = props.interaction

  return (
    <div>
      <li>
        <Moment fromNow>{date}</Moment> 
        <p>{note}</p>
      </li>
    </div> 
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletingInteraction: (id, friend_id) => {dispatch(deletingInteraction(id, friend_id))}
//   }
// }

export default Interaction
import React from 'react';
import { Link } from 'react-router-dom'

const ImportantDateDetail = (props) => {
  
  const showHideClassName = props.showModal ? 'modal is-active' : 'modal display-none'
  
  return (
    <div className={showHideClassName}>
      <div className='modal-background'></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{props.dateTitle}</p>
        </header>
        <div className='modal-card-body'>
          <p>{props.dateNote}</p>
          <p>(in case the event detail wasn't clear, this calendar event is about <Link to={`/friends/${props.dateFriend.id}`}>{props.dateFriend.name}</Link>)</p>
          <button onClick={props.unshowModal}>close</button>
        </div>
      </div>
    </div>
  )
}

export default ImportantDateDetail


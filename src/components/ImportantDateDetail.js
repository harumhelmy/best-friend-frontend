import React from 'react';

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
          <p>this is an important date re: {props.dateFriendName}</p>
          <button onClick={props.unshowModal}>close</button>
        </div>
      </div>
    </div>
  )
}

export default ImportantDateDetail


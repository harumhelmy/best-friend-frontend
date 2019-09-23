import React from 'react'
import { Link } from 'react-router-dom' // will have to figure this out

const FriendCard = (props) => {

  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>{props.friend.name}</p>
        <div className='card-content'>
          {props.friend.pronouns}
        </div>
      </header>
    </div>
  )
}


export default FriendCard

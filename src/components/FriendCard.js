import React from 'react'
import { Link } from 'react-router-dom'

const FriendCard = (props) => {

  return (
    <Link to={`/friends/${props.friend.id}`}>
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>{props.friend.name}</p>
        <div className='card-content'>
          {props.friend.pronouns}
        </div>
      </header>
    </div>
    </Link>
  )
}

export default FriendCard

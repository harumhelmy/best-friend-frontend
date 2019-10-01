import React from 'react'
import { Link } from 'react-router-dom'

const FriendCard = (props) => {

  return (
    <Link to={`/friends/${props.friend.id}`}
      style={{ textDecoration: 'none' }}
    >
    <div className='box'>
        <p className='card-header-title'>{props.friend.name}</p>
          {props.friend.pronouns}
        </div>
    </Link>
  )
}

export default FriendCard

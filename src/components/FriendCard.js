import React from 'react'
import { Link } from 'react-router-dom'

const FriendCard = (props) => {

  return (
    
    <div className='column is-3'>
      <Link to={`/friends/${props.friend.id}`}
        style={{ textDecoration: 'none' }}>
        <div className='box'>
            <p>{props.friend.name}</p>
              {props.friend.pronouns}
            </div>
      </Link>
    </div>
  
  )
}

export default FriendCard

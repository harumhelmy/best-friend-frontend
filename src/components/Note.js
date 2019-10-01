import React from 'react'

const Note = (props) => {
  return (
    <div>
      <p>
        {props.note.content}
      </p>
    </div>
  )
}

export default Note
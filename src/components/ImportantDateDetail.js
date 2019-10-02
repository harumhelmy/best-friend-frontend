import React from 'react'
import moment from 'moment'

const ImportantDateDetail = (props) => {
  const {date, title} = props.date
  return (
    <div>
      <li>{moment(date).format('LL')}
      <p>{title}</p></li>
    </div> 
  )
}

export default ImportantDateDetail
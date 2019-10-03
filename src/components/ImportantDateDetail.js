import React from 'react'
import moment from 'moment'

const ImportantDateDetail = (props) => {
  const {date, title} = props.date
  return (
    <div>
      <li><strong>{moment(date).format('LL')}</strong>
      <p>{title}</p></li>
    </div> 
  )
}

export default ImportantDateDetail
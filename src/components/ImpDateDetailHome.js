import React, {Fragment} from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

class ImpDateDetailHome extends React.Component { 

  render(){

  const { date, title } = this.props.date

    return (
      <Fragment>
        <li><strong>{moment(date).format('LL')}</strong> // <strong>{moment(date).fromNow()}</strong></li>
        <p>{title}</p>
      </Fragment>
    )
  }
}

export default ImpDateDetailHome
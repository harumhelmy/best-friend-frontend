import React, {Fragment, Component} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { connect } from 'react-redux'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import ImportantDateModal from './ImportantDateModal'

const localizer = momentLocalizer(moment)

class MyCalendar extends Component {

  constructor(){
    super()
    this.state = {
      dateModalShown: false,
      dateTitle: '',
      note: '',
      dateFriend: {}
    }
  }
  
  showModal = (event)=>{
    console.log(event.friend)
    this.setState({
      dateModalShown: true,
      dateTitle: event.title,
      dateNote: event.note,
      dateFriend: event.friend
    })
  }

  unshowModal = ()=>{
    this.setState({
      dateModalShown: false
    })
  }

  render(){
    return (
        <div className="container" style={{height: 500}}>
          <Calendar
            popup
            events={this.props.importantDates}
            defaultDate={moment().toDate()}
            localizer={localizer}
            views={['month']}
            onSelectEvent={event => this.showModal(event)}
          />
          <ImportantDateModal showModal={this.state.dateModalShown} 
            dateTitle={this.state.dateTitle}
            dateFriend={this.state.dateFriend}
            dateNote={this.state.dateNote}
            unshowModal={this.unshowModal}
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    importantDates: state.importantDates.map( date => ({
      id: date.id, 
      friend_id: date.friend_id,
      title: date.title,
      note: date.note,
      start: moment(date.date)._d, 
      end: moment(date.date)._d, 
      friend: date.friend,
      allDay: true }))
  }
}

export default connect(mapStateToProps)(MyCalendar)
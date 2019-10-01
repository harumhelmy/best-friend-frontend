import React, {Fragment, Component} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { connect } from 'react-redux'
import moment from 'moment'
import Moment from 'react-moment'
import { fetchingInteractions } from '../redux/actions/index'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

class MyCalendar extends Component {

  render(){
    console.log(this.props.importantDates)
    return (
        <div className="container" style={{height: 500}}>
          <Calendar
            events={this.props.importantDates}
            defaultDate={moment().toDate()}
            localizer={localizer}
            views={['month']}
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interactions: state.interactions,
    importantDates: state.importantDates.map( date => ({id: date.id, title: date.title, start: moment(date.date)._d, end: moment(date.date)._d, allDay: true  }))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingInteractions: () => { dispatch(fetchingInteractions()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCalendar)
import React from 'react'
import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'

class EditImportantDate extends React.Component {
  render(){
    console.log(this.props)
    return (
      <h3>this is a place to edit some important dates</h3>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    importantDate: state.importantDates.map(date => date.id)
  }
}


export default connect(mapStateToProps)(EditImportantDate) 
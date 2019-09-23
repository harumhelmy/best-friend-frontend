import { combineReducers } from 'redux'

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case "FETCHED_USER":
      return action.payload 
    default:
      return state
  }
}

const friendsReducer = (state = [], action) => {
    switch(action.type) {
    case "FETCHED_FRIENDS":
      return action.payload
    default: 
      return state 
  }
}

const rootReducer = combineReducers({
  currentUser: userReducer,
  friends: friendsReducer
})

export default rootReducer  
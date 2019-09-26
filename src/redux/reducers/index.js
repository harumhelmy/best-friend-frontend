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
    case "ADDED_FRIEND":
      return [...state, action.payload]
    default: 
      return state 
  }
}

// might need all important dates here 
const importantDatesReducer = (state = [], action) => {
  switch(action.type){
    case "FETCHED_IMPORTANT_DATE":
      return action.payload
    case "ADDED_IMPORTANT_DATE":
      return [...state, action.payload]
    default:
      return state
  }
}

const notesReducer = (state = [], action) => {
  switch(action.type){
    case "FETCHED_NOTES":
      return action.payload
    case "ADDED_NOTE":
      return [...state, action.payload]
    default: 
      return state
  }
}

const interactionsReducer = (state = [], action) => {
  switch(action.type){
    case "FETCHED_INTERACTIONS":
      return action.payload
    case "ADDED_INTERACTION":
      return [...state, action.payload]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentUser: userReducer,
  friends: friendsReducer,
  importantDates: importantDatesReducer,
  notes: notesReducer,
  interactions: interactionsReducer,
})

export default rootReducer  
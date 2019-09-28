import { combineReducers } from 'redux'

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case "FETCHED_USER":
      return action.payload.user
    default:
      return state
  }
}

const friendsReducer = (state = [], action) => {
    switch(action.type) {
    case "FETCHED_USER":
      return action.payload.friends
    case "ADDED_FRIEND":
      return [...state, action.payload]
    case "UPDATED_APPRECIATION":
      return state.map( friend => {
        if (friend.id === action.payload.friendId) {
          return {
            ...friend,
            appreciation: action.payload.appreciation
          }
        } else {
          return friend
        }
      })
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

// const initialModalState = {
//   modalType: null,
//   modalProps: {}
// }

// const modalsReducer = ( state = initialModalState, action ) => {
//   switch(action.type) {
//     case "SHOW_MODAL":
//       return {
//         modalProps: action.modalProps,
//         modalType: action.modalType,
//         type: action.type
//       }
//     case 'HIDE_MODAL':
//       return {
//         initialModalState 
//       }
//     default:
//       return state
//   }
// }


const rootReducer = combineReducers({
  currentUser: userReducer,
  friends: friendsReducer,
  importantDates: importantDatesReducer,
  notes: notesReducer,
  interactions: interactionsReducer
})

export default rootReducer  
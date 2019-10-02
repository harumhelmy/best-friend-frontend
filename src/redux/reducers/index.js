import { combineReducers } from 'redux'

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case "FETCHED_USER":
      return JSON.parse(action.payload.user)
    case "LOGOUT_USER":
      return {}
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
    case "UPDATED_FRIEND":
      const attributeKey = Object.keys(action.payload)[0] 
      return state.map( friend => {
        if (friend.id === action.payload.friendId) {
          return {
            ...friend,
            [attributeKey]: action.payload[attributeKey]
          }
        } else {
          return friend
        }
      })
    case "ADDED_NOTE":
      return state.map( friend => {
        if (friend.id === action.payload.friend_id) {
          return {
            ...friend,
            notes: [...friend.notes, action.payload]
          }
        } else {
          return friend
        }
      })
    case "DELETE_FRIEND":
      return state.filter( friend => friend.id !== action.payload )
    case "LOGOUT_USER":
      return []
    default: 
      return state 
  }
}

const importantDatesReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_USER":
      return action.payload.important_dates
    case "ADDED_IMPORTANT_DATE":
      return [...state, action.payload]
    case "LOGOUT_USER":
      return []
    default:
      return state
  }
}

const interactionsReducer = (state = [], action) => {
  switch(action.type){
    case "FETCHED_USER":
      return action.payload.interactions
    case "ADDED_INTERACTION":
      return [...state, action.payload]
    case "LOGOUT_USER":
      return []
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentUser: userReducer,
  friends: friendsReducer,
  importantDates: importantDatesReducer,
  interactions: interactionsReducer
})

export default rootReducer  


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
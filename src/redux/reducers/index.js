const initialState = {
  currentUser: {}
}

const userReducer = (oldState = initialState, action) => {
  console.log(oldState, 'inside the reducer', action)
  return oldState
}

// combineReducer

export default userReducer 
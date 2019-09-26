// USER ACTIONS 

function fetchedUser(user){
  return {type: "FETCHED_USER", payload: user}
}

function fetchingUser() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/12')
    .then(res => res.json())
    .then(user => dispatch(fetchedUser(user)))
  } 
}

// FRIEND ACTIONS
function fetchedFriends(friends){
  return {type: "FETCHED_FRIENDS", payload: friends}
}

function fetchingFriends(){
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/12')
    .then(res => res.json())
    .then(user => dispatch(fetchedFriends(user.friends)))
  }
}

function addingNewFriend(data){
  return (dispatch) => {
    fetch('http://localhost:3000/friends', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        pronouns: data.pronouns,
        appreciation: data.appreciation,
        user_id: data.userId
      })
    }).then(res => res.json())
    .then(friend => {
      dispatch(addedFriend(friend))
    })
  }
}

function addedFriend({name, pronouns, appreciation, userId}){
  return {
    type: 'ADDED_FRIEND',
    payload: { name, pronouns, appreciation, userId }
  }
}

// important date actions 
function addingNewImportantDate(data){
  return (dispatch) => {
    fetch('http://localhost:3000/important_dates', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        date: data.date, 
        user_id: data.userId,
        note: data.note,
        friend_id: data.friendId,
        // reminder: data.reminder
      })
    }).then( res => res.json())
    .then( date => dispatch(addedImportantDate(date)) )
  }
}

function addedImportantDate( { name, date, note, user_id, friend_id } ){
  return {
    type: "ADDED_IMPORTANT_DATE",
    payload: { name, date, note, user_id, friend_id }
  }
}

// note actions 
function addingNewNote(data){
  return (dispatch) => {
    fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      content: data.content,
      user_id: data.userId,
      friend_id: data.friendId //TODO: dynamic render
    })
  })
  .then( res => res.json())
  .then( note => dispatch(addedNote(note) ))
  }
}

function addedNote({content, user_id, friend_id}){
  return {
    type: 'ADDED_NOTE',
    payload: { content, user_id, friend_id }
  }
} 

// interaction actions 
function addingNewInteraction(data) {
  return (dispatch) => {
    fetch('http://localhost:3000/interactions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        date: data.date,
        note: data.note,
        user_id: data.userId,
        friend_id: data.friendId
      })
    })
    .then( res => res.json())
    .then( interaction => dispatch(addedInteraction(interaction)))
  }
}

function addedInteraction({date, note, user_id, friend_id}) {
  return {
  type: 'ADDED_INTERACTION',
  payload: {date, note, user_id, friend_id}
  }
}

export { fetchingUser, fetchingFriends, addingNewFriend, addingNewImportantDate, addingNewNote, addingNewInteraction } 
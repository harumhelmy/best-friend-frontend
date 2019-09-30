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

function addedFriend(friend){
  return {
    type: 'ADDED_FRIEND',
    payload: friend
  }
}

// important date actions 
function addingNewImportantDate(data){
  debugger
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

function addedImportantDate(date){
  return {
    type: "ADDED_IMPORTANT_DATE",
    payload: date
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
      friend_id: data.friendId
    })
  })
  .then( res => res.json())
  .then( note => dispatch(addedNote(note) ))
  }
}

function addedNote(note){
  return {
    type: 'ADDED_NOTE',
    payload: note
  }
} 

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

function addedInteraction(interaction) {
  debugger
  return {
  type: 'ADDED_INTERACTION',
  payload: interaction
  }
}

function updatingFriend(info) {

  const attributeKey = Object.keys(info)[0]

  return (dispatch) => {
    fetch(`http://localhost:3000/friends/${info.friendId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        [attributeKey]: info[attributeKey]
      })
    })
    .then( res => res.json() )
    .then ( updated => dispatch(updatedFriend(info)) )
  }
}

function updatedFriend(info){
  return {
    type: "UPDATED_FRIEND",
    payload: info
  }
}

function deletingFriend(friendId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/friends/${friendId}`, {
      method: "DELETE"
    })
    .then( res => res.json() )
    .then( deleted => dispatch(deleteFriend(friendId)))
  }
}

function deleteFriend(friendId){
  return {
    type: "DELETE_FRIEND",
    payload: friendId
  }
}

export { fetchingUser, addingNewFriend, addingNewImportantDate, addingNewNote, addingNewInteraction, deletingFriend, updatingFriend } 


// UPDATING APPRECIATION IS NOW PART OF UPDATING FRIEND

// function updatingAppreciation(info) {
//   return (dispatch) => {
//     fetch(`http://localhost:3000/friends/${info.friendId}`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify({
//         appreciation: info.appreciation
//       })
//     })
//     .then( res => res.json() )
//     .then ( updated => dispatch(updatedFriend(info)) )
//   }
// }
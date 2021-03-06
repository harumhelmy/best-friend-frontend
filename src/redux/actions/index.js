// USER ACTIONS 

const token = () => {
  if (localStorage.token){
  return localStorage.token
  }
}

// also effectively logs in people
function fetchedUser(user){
  return {
    type: "FETCHED_USER", 
    payload: user
  }
}

function fetchingUserData() {
  return (dispatch) => {
    if (token()) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token()}`
        }
      })
      .then(res => res.json())
      .then(user => {
        if(user.error){
          localStorage.removeItem('token')
        } else {
          dispatch(fetchedUser(user))}
      })
    }
  } 
}

function userPostFetch(user) {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then( res => res.json() )
    .then( data => {
      if(data.error){
        alert("oop, we couldn't make an account, please try again later")
      } else {
        localStorage.setItem("token", data.jwt)
        dispatch(createdUser(data))
      }
    })
  }
}

function createdUser(data){
  return {
    type: 'CREATED_USER',
    payload: data
  }
}

function userLoginFetch(userInfo) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.user && data.jwt) {
        localStorage.setItem('token', data.jwt)
        dispatch(fetchedUser(data))
      } else {
        alert("Sorry, incorrect username or password")
      }
    })
  }
}

function loggingOut() {
  return {
    type: "LOGOUT_USER"
  }
}

function addingNewFriend(data){
  return (dispatch) => {
    fetch('http://localhost:3000/friends', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token()}`
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

function updatingFriend(info) {

  const attributeKey = Object.keys(info)[0]

  return (dispatch) => {
    fetch(`http://localhost:3000/friends/${info.friendId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token()}`
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
      method: "DELETE", 
      headers: {
        'Authorization': `Bearer ${token()}`
      }
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

// important date actions 
function addingNewImportantDate(data){
  return (dispatch) => {
    fetch('http://localhost:3000/important_dates', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token()}`
      },
      body: JSON.stringify({
        title: data.title,
        date: data.date, 
        user_id: data.userId,
        note: data.note,
        friend_id: data.friendId,
        // reminder: data.reminder
      })
    })
    .then( res => res.json())
    .then( date => dispatch(addedImportantDate(date)) )
  }
}

function addedImportantDate(date){
  return {
    type: "ADDED_IMPORTANT_DATE",
    payload: date
  }
}

function deletingImportantDate(dateId){
  return (dispatch) => {
    fetch(`http://localhost:3000/important_dates/${dateId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token()}`
      }
    })
    .then( res => res.json() )
    .then( deleted => dispatch(deletedImportantDate(dateId)))
  }
}

function updatingImportantDate(data){
  return dispatch => {
    fetch(`http://localhost:3000/important_dates/${data.dateId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${token()}`
      },
      body: JSON.stringify({
        date: data.date,
        title: data.title,
        note: data.note,
      })
    })
    .then( res => res.json() )
    .then( date => dispatch(updatedImportantDate(date)))
  }
}

function updatedImportantDate(date){
  return {
    type: "UPDATE_IMPORTANT_DATE",
    payload: date
  }
}

// function updatingImportantDate(dateId){
//   return dispatch => {
//     fetch(fetch(`http://localhost:3000/important_dates/${dateId}`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json',
//         'Authorization': `Bearer ${token()}`
//       },
//       body: 
//     })
//   }
// }

function deletedImportantDate(dateId){
  return {
    type: "DELETE_IMPORTANT_DATE",
    payload: dateId
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
        'content-type': 'application/json',
        'Authorization': `Bearer ${token()}`
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
  return {
  type: 'ADDED_INTERACTION',
  payload: interaction
  }
}

function deletingInteraction(id) {
  return dispatch => {
    fetch(`http://localhost:3000/interactions/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token()}`
      }
    })
    .then( res => res.json())
    .then( deleted => dispatch(deletedInteraction(id)))
  }
}

function deletedInteraction(id){
  return {
    type: 'DELETED_INTERACTION',
    payload: id
  }
}


export { fetchingUserData, 
  userPostFetch,
  userLoginFetch,
  loggingOut,
  addingNewFriend,
  deletingFriend, 
  updatingFriend, 
  addingNewImportantDate,
  updatingImportantDate,
  deletingImportantDate,
  addingNewNote, 
  addingNewInteraction, 
  deletingInteraction }  
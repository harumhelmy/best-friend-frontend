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
  console.log('hi')
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
    .then( friend => {
      dispatch(addedFriend(data))
    })
  }
}

function addedFriend({name, pronouns, appreciation, userId}){
  return {
    type: 'ADDED_FRIEND',
    payload: { name, pronouns, appreciation, userId }
  }
}

export { fetchingUser, fetchingFriends, addingNewFriend } 
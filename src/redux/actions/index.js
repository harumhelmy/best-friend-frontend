// action creators

function fetchedUser(user){
  return {type: "FETCHED_USER", payload: user}
}

function fetchingUser(){
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/12')
    .then(res => res.json())
    .then(user => dispatch(fetchedUser(user)))
  } 
}

export { fetchingUser, fetchedUser }
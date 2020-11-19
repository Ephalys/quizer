import { SET_USERNAME, EDIT_USERNAME } from '../actions/username'
const initialState = {
  username: typeof localStorage.getItem('username') !== "undefined" ? localStorage.getItem('username') : ""
}

const UsernameReducer = (state = initialState, action) => {
  console.log('action.type:', action.type);
  switch (action.type) {
    case SET_USERNAME:
      // localStorage.setItem('username', action.payload.username)
      // return {
      //   ...state,
      //   username: action.payload.username
      // }
      return state
    case EDIT_USERNAME:
      return {
        ...state,
        username: action.payload.username
      }
    default:
      return state
  }
}

export default UsernameReducer
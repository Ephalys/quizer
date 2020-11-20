import { EDIT_USERNAME } from '../actions/username'
const initialState = {
  username: typeof localStorage.getItem('username') !== "undefined" ? localStorage.getItem('username') : ""
}

const UsernameReducer = (state = initialState, action) => {
  console.log('action.type:', action.type);
  console.log('action.payload:', action.payload);
  switch (action.type) {
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
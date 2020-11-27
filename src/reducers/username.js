import { EDIT_USERNAME } from 'actions/username'
const initialState = {
  username: localStorage.getItem('username') !== null ? localStorage.getItem('username') : ""
}

const UsernameReducer = (state = initialState, action) => {
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
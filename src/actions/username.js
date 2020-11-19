export const SET_USERNAME = 'SET_USERNAME'
export const EDIT_USERNAME = 'EDIT_USERNAME'

export const setUsername = (event) => ({
  type: SET_USERNAME
})

export const editUsername = (event) => ({
  type: EDIT_USERNAME,
  payload: {
    username: event.target.value
  }
})
export const EDIT_USERNAME = 'EDIT_USERNAME'

export const editUsername = (event) => ({
  type: EDIT_USERNAME,
  payload: {
    username: event.target.value
  }
})
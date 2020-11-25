export const EDIT_SEARCH = 'EDIT_SEARCH'

export const editSearch = (event) => ({
  type: EDIT_SEARCH,
  payload: {
    search: event.target.value
  }
})
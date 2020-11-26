export const SEARCH_CATEGORY = 'SEARCH_CATEGORY'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export const searchCategory = (event) => ({
  type: SEARCH_CATEGORY,
  payload: {
    search: event.target.value
  }
})

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: {
    category: category
  }
})
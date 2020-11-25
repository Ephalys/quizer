import { EDIT_SEARCH } from '../actions/search'
const initialState = {
  search: ""
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SEARCH:
      return {
        ...state,
        search: action.payload.search
      }
    default:
      return state
  }
}

export default SearchReducer
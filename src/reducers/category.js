import { SEARCH_CATEGORY, SELECT_CATEGORY } from '../actions/category'
const initialState = {
  search: "",
  category: null
}

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CATEGORY:
      return {
        ...state,
        search: action.payload.search
      }
    case SELECT_CATEGORY:
      // localStorage.setItem("category", JSON.stringify(action.payload.category))
      return {
        ...state,
        category: action.payload.category
      };
    default:
      return state
  }
}

export default CategoryReducer
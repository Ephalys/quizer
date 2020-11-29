import { EDIT_SEARCH, SELECT_CATEGORY, TOGGLE_CATEGORY, GET_CATEGORIES } from 'actions/category'
const initialState = {
  search: "",
  category: null,
  isVisibleCategory: true,
  listCategory: []
}

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SEARCH:
      return {
        ...state,
        search: action.payload.search
      }
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload.category
      };
    case TOGGLE_CATEGORY:
      return {
        ...state,
        isVisibleCategory: !state.isVisibleCategory
      }
    case GET_CATEGORIES:
      return {
        ...state,
        listCategory: state.search.length !== 0 ? action.payload.categories : []
      }
    default:
      return state
  }
}

export default CategoryReducer
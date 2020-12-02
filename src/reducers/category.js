import {
  EDIT_SEARCH,
  SELECT_CATEGORY,
  TOGGLE_CATEGORY,
  GET_CATEGORIES,
  FAV_CATEGORIES,
} from "actions/category";
const initialState = {
  search: "",
  category: null,
  isVisibleCategory: true,
  listCategory: [],
  FavoritesCategories: [],
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SEARCH:
      return {
        ...state,
        search: action.payload.search,
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
      };
    case TOGGLE_CATEGORY:
      if (state.search.length === 0) {
        return {
          ...state,
          isVisibleCategory: !state.isVisibleCategory,
          listCategory: [],
        };
      }
      return {
        ...state,
        isVisibleCategory: !state.isVisibleCategory,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        listCategory:
          state.search.length !== 0 ? action.payload.categories : [],
      };
    case FAV_CATEGORIES:
      let index = state.FavoritesCategories.findIndex(
        (i) => i.id === action.payload.id
      );
      let newFav;
      if (index === -1) newFav = [...state.FavoritesCategories, action.payload];
      else {
        newFav = state.FavoritesCategories.filter(
          (e) => e.id != action.payload.id
        );
      }
      return {
        ...state,
        FavoritesCategories: newFav,
      };
    default:
      return state;
  }
};

export default CategoryReducer;

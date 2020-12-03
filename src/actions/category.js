export const EDIT_SEARCH = "EDIT_SEARCH";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const TOGGLE_CATEGORY = "TOGGLE_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const FAV_CATEGORIES = "FAV_CATEGORIES";

export const editSearch = (event) => ({
  type: EDIT_SEARCH,
  payload: {
    search: event.target.value,
  },
});

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: {
    category: category,
  },
});

export const toggleCategory = () => ({
  type: TOGGLE_CATEGORY,
});

export const getCategories = (c) => ({
  type: GET_CATEGORIES,
  payload: {
    categories: c,
  },
});

export const favoriteCategories = (result) => {
  return {
    type: FAV_CATEGORIES,
    payload: result,
  };
};

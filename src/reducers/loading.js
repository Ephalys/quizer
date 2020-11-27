import { TOGGLE_LOADING } from 'actions/loading';

const initialState = {
  isLoading: true
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    default:
      return state;
  }
};

export default LoadingReducer
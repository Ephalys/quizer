import { UPDATE_SCORE_TABLE } from "actions/score";

const initialState = {
  scoreValue: null,
  scoreTable: [],
};

const Score = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE_TABLE:
      if (Array.isArray(action.payload)) {
        let newScoreTable = action.payload;
        return {
          ...state,
          scoreTable: newScoreTable,
        };
      } else {
        let newScoreTable = [...state.scoreTable, action.payload];
        localStorage.setItem("scoreTable", JSON.stringify(newScoreTable));
        return {
          ...state,
          scoreTable: newScoreTable,
        };
      }
    default:
      return state;
  }
};

export default Score;

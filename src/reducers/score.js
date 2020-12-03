import { UPDATE_SCORE, UPDATE_SCORE_TABLE } from "actions/score";

const initialState = {
  scoreValue: null,
  scoreTable: [],
};

const Score = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        scoreValue: action.payload,
      };
    case UPDATE_SCORE_TABLE:
      let newScoreTable = [...state.scoreTable, action.payload];
      localStorage.setItem("scoreTable", JSON.stringify(newScoreTable));
      return {
        ...state,
        scoreTable: newScoreTable,
      };
    default:
      return state;
  }
};

export default Score;

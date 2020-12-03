export const UPDATE_SCORE_TABLE = "UPDATE_SCORE_TABLE";

export const updateScoreTable = (result) => {
  return {
    type: UPDATE_SCORE_TABLE,
    payload: result,
  };
};

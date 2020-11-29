export const UPDATE_SCORE = "UPDATE_SCORE";

export const updateScore = result => {
    return {
        type: UPDATE_SCORE,
        payload: result
    };
};
import { UPDATE_SCORE } from 'actions/score';

const initialState = {
    scoreValue: null
};

const Score = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SCORE:
            console.log(action.payload)
            return {
                ...state
            };
        default:
            return state;
    }
};

export default Score
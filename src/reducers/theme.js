import { APPLY_THEME } from '../actions/theme';
import { defaultTheme } from '../assets/styles/themes';

const initialState = {
    themeValue: defaultTheme
};

const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_THEME:
            return Object.assign({}, { themeValue: action.payload });
        default:
            return state;
    }
};

export default ThemeReducer
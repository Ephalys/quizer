import React, { useState } from 'react'
import { defaultTheme, MartiniTheme, MidnightCityTheme, ByDesignTheme, Blooker20Theme } from 'assets/styles/themes';
import { useDispatch } from 'react-redux';
import { applyTheme } from 'actions/theme'
import {StyledButton, StyledThemeSelector, Drop, ThemesContainer} from './themeSelectorStyles'

const ThemeSelector = () => {
    const dispatch = useDispatch();
    const changeTheme = theme => {
        dispatch(applyTheme(theme))
    }

    const [showThemeSelector, setShowThemeSelector] = useState(false);

    return (
        <StyledThemeSelector>
            <Drop onClick={() => setShowThemeSelector(!showThemeSelector)} />
            { showThemeSelector && <ThemesContainer>
                <StyledButton onClick={() => changeTheme(defaultTheme)}>Default</StyledButton>
                <StyledButton onClick={() => changeTheme(MartiniTheme)}>Martini</StyledButton>
                <StyledButton onClick={() => changeTheme(MidnightCityTheme)}>MidnightCity</StyledButton>
                <StyledButton onClick={() => changeTheme(ByDesignTheme)}>ByDesign</StyledButton>
                <StyledButton onClick={() => changeTheme(Blooker20Theme)}>Blooker20Theme</StyledButton>
            </ThemesContainer>}
        </StyledThemeSelector>
    );
}

export default ThemeSelector;
import React, { useState } from 'react'
import styled from 'styled-components'
import { defaultTheme, MartiniTheme, MidnightCityTheme, ByDesignTheme, Blooker20Theme } from '../../assets/styles/themes';
import { useDispatch } from 'react-redux';
import { applyTheme } from '../../actions/theme'
import drop from '../../assets/icons/drop.svg'

const StyledButton = styled.button`
  color: #000;
  background-color: #fff;
  box-shadow: none;
  border: 0px;
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  margin: 12px;
`;

const StyledThemeSelector = styled.div`
    position: absolute;
    top:10px;
    right: 10px;
`

const ThemeSelector = () => {
    const dispatch = useDispatch();
    const changeTheme = theme => {
        dispatch(applyTheme(theme))
    }

    const [showThemeSelector, setShowThemeSelector] = useState(false);

    return (
        <StyledThemeSelector>
            <img src={drop} alt="drop" onClick={() => setShowThemeSelector(!showThemeSelector)} />
            { showThemeSelector && <div>
                <StyledButton onClick={() => changeTheme(defaultTheme)}>Default</StyledButton>
                <StyledButton onClick={() => changeTheme(MartiniTheme)}>Martini</StyledButton>
                <StyledButton onClick={() => changeTheme(MidnightCityTheme)}>MidnightCity</StyledButton>
                <StyledButton onClick={() => changeTheme(ByDesignTheme)}>ByDesign</StyledButton>
                <StyledButton onClick={() => changeTheme(Blooker20Theme)}>Blooker20Theme</StyledButton>
            </div>}
        </StyledThemeSelector>
    );
}

export default ThemeSelector;
import styled from "styled-components";
import {ReactComponent as DropSvg} from 'assets/icons/drop.svg'

export const StyledButton = styled.button`
  color: #000;
  background-color: #fff;
  box-shadow: none;
  border: 0;
  border-radius: 4px;
  font-size: 1.2em;
  min-width: 120px;
  padding: 12px;
  margin: 12px;
  cursor: pointer;
`;

export const StyledThemeSelector = styled.div`
    position: fixed;
    top: 24px;
    right: 24px;
`

export const Drop = styled(DropSvg)`
  cursor: pointer;
`
export const ThemesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`
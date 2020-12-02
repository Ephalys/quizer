import styled from "styled-components";
import { ReactComponent as DropSvg } from 'assets/icons/drop.svg'
import breakpoints from "assets/styles/breakpoints";

export const StyledThemeSelector = styled.div`
    position: fixed;
    top: 16px;
    right: 16px;
    @media (min-width: ${breakpoints.$screenMinXs}) {
      top: 24px;
      right: 24px;
  }
`

export const Drop = styled(DropSvg)`
  cursor: pointer;
`
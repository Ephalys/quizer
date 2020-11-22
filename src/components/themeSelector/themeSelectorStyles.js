import styled from "styled-components";
import { ReactComponent as DropSvg } from 'assets/icons/drop.svg'

export const StyledThemeSelector = styled.div`
    position: fixed;
    top: 24px;
    right: 24px;
`

export const Drop = styled(DropSvg)`
  cursor: pointer;
`
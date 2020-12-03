import styled from "styled-components";
import { ReactComponent as DropSvg } from 'assets/icons/drop.svg'

export const Drop = styled(DropSvg)`
  cursor: pointer;
  transition: fill .3s;

  &:hover {
    fill: #ccc;
    transition: fill .3s;
  }
`
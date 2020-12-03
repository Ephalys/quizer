import styled from "styled-components";
import { ReactComponent as UserSvg } from 'assets/icons/user.svg'

export const User = styled(UserSvg)`
  cursor: pointer;
  transition: fill .3s;

  &:hover {
    fill: #ccc;
    transition: fill .3s;
  }
`
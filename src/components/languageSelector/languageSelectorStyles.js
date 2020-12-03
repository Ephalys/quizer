import styled from "styled-components";
import { ReactComponent as LanguageSvg } from "assets/icons/language.svg";

export const Language = styled(LanguageSvg)`
  cursor: pointer;
  transition: fill .3s;

  &:hover {
    fill: #ccc;
    transition: fill .3s;
  }
`;

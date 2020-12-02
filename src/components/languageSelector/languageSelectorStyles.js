import styled from "styled-components";
import { ReactComponent as LanguageSvg } from "assets/icons/language.svg";
import breakpoints from "assets/styles/breakpoints";

export const Language = styled(LanguageSvg)`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const StyledLanguageSelector = styled.div`
  position: fixed;
  top: 16px;
  right: 56px;
  @media (min-width: ${breakpoints.$screenMinXs}) {
    top: 24px;
    right: 64px;
  }
`;

import { ReactComponent as LanguageSvg } from "assets/icons/language.svg";
import styled from "styled-components";

export const Language = styled(LanguageSvg)`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const StyledLanguageSelector = styled.div`
  position: fixed;
  top: 24px;
  right: 56px;
`;

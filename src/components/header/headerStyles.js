import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

export const HeaderStyled = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  display: flex;

  @media (min-width: ${breakpoints.$screenMinXs}) {
    top: 24px;
    right: 24px;
  }

  svg {
    margin-right: 8px;
    @media (min-width: ${breakpoints.$screenMinXs}) {
      margin-right: 16px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

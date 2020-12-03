import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

export const HeaderStyled = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;

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

export const StyledContainerIcones = styled.div``;

export const StyledTitle = styled.h1`
  font-size: 18px;
  margin: 0;
  padding-left: 50%;
`;

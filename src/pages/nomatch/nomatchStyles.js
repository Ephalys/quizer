import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;

  @media (min-width: ${breakpoints.$screenMinXs}) {
    padding: 0 32px;
}
`

export const BigTitle = styled.h1`
  font-size: 100px;
  line-height: 104px;
  margin: 0;
`

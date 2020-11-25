import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const CategoryStyled = styled.div`
  color: black;
  background-color: white;
  font-weight: bold;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  border-radius: 12px;
  min-width: 184px;
  &:last-child{
    margin-bottom: 0;
  }
`
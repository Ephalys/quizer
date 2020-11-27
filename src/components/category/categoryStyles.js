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
  transition: all .3s;
  text-align: center;
  @media (min-width: ${breakpoints.$screenMinXs}) {
    width: 48%;
  }
  @media (min-width: ${breakpoints.$screenMinMd}) {
    width: 23%;
  }
  &:last-child{
    margin-bottom: 0;
  }
  &:hover {
    outline: none;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    box-shadow: none;
    cursor: pointer;
  }
`
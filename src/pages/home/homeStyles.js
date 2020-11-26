import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const Titleh1 = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;
`

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 0 16px;
  @media (min-width: ${breakpoints.$screenMinXs}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const Titleh2 = styled.h2`
  font-size: 18px;
  text-align: center;
  padding: 24px 16px;
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
`
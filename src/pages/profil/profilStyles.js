import styled from "styled-components";
import breakpoints from "assets/styles/breakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
  
  @media (min-width: ${breakpoints.$screenMinXs}) {
    padding: 0 32px;
  }
`

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  
  > div:first-child {
    margin-left: 0;
  }

  > div:last-child {
    margin-right: 0;
  }
`

export const Subtitle = styled.h2`
  margin: 16px 0;
  font-size: 20px;
`

export const HomeButton = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  transition: color .3s;
  
  &:hover {
    color: #ccc;
    transition: color .3s;
  }

  @media (min-width: ${breakpoints.$screenMinXs}) {
    top: 24px;
    left: 24px;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`

export const ScoreCategory = styled.span`
    margin: 0;
`

export const Score = styled.span`
  color: black;
  font-weight: bold;
  margin-right: 16px;
`

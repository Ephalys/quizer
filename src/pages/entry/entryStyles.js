import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const EntryWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 24px;
    
    @media (max-width: ${breakpoints.$screenMaxXs}) {
      padding: 16px;
    }
`

export const EntryTitle = styled.h1`
  margin: 0 0 24px;
`

export const BlackSpan = styled.span`
  color: black;
`
export const EntrySubtitle = styled.p`
  font-size: 20px;
  margin: 0 0 40px;
`

import styled from "styled-components";

export const EntryWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    
    @media (min-width: 768px) {
        padding: 10% 0;
    }
`

export const EntryTitle = styled.h1`
  margin: 0 0 24px;
`

export const EntrySubtitle = styled.p`
  font-size: 24px;
  margin: 0 0 40px;
`

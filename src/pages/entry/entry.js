import React from 'react';
import styled from 'styled-components'

const Entry = () => {
    return (
        <EntryWrapper>
            Welcome to Quizer 👋
        </EntryWrapper>
    );
}


const EntryWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    
    @media (min-width: 768px) {
        padding: 10% 0;
    }
`

export default Entry;
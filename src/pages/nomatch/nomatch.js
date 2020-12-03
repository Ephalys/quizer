import React from 'react';
import {Link} from 'react-router-dom';
import {Container, BigTitle} from "./nomatchStyles"

function Nomatch() {
    return (
        <Container>
            <BigTitle>
                404
            </BigTitle>
            <h2>
                This page does not exist, please go back to <Link to="/">home</Link>
            </h2>
        </Container>
    );
}

export default Nomatch;

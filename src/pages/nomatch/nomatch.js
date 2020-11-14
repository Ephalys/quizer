import React from 'react';
import {Link} from 'react-router-dom';

function Nomatch() {
    return (
        <div className="nomatch">
            <h1>
                This page does not exist, please go back to <Link to="/">home</Link>
            </h1>
        </div>
    );
}

export default Nomatch;

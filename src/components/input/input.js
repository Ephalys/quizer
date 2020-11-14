import React from 'react';
import {CustomInput} from "./inputStyles";

const Input = (props) => {
    return (
        <CustomInput type="text" placeholder={props.placeholder}/>
    );
};

export default Input;

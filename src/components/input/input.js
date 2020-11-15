import React from 'react';
import {CustomInput, InputContainer, Arrow} from "./inputStyles";

const Input = (props) => {
    return (
        <InputContainer>
            <CustomInput type="text" placeholder={props.placeholder}/>
            {
                props.arrow && <Arrow fill="black" width={28} height={28}/>
            }
        </InputContainer>
    );
};

export default Input;

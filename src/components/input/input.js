import React from 'react';
import { CustomInput, InputContainer, Arrow } from "./inputStyles";

const Input = (props) => {
    return (
        <InputContainer>
            <CustomInput value={props.value} type="text" onChange={props.onChange} placeholder={props.placeholder} />
            {
                props.arrow && <Arrow fill="black" width={28} height={28} onClick={() => props.onClick} />
            }
        </InputContainer>
    );
};

export default Input;

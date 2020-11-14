import React from 'react';
import {CustomInput, InputContainer, Arrow} from "./inputStyles";
import colors from '../../assets/styles/colors'

const Input = (props) => {
    return (
        <InputContainer>
            <CustomInput type="text" placeholder={props.placeholder}/>
            {
                props.arrow && <Arrow fill={colors.primary} width={28} height={28}/>
            }
        </InputContainer>
    );
};

export default Input;

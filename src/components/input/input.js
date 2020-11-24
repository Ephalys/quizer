import React from 'react';
import { CustomInput, InputContainer, ArrowButton } from "./inputStyles";
import {ReactComponent as Arrow} from "assets/icons/arrow.svg";

const Input = (props) => {
    return (
        <InputContainer>
            <CustomInput value={props.value} type="text" onChange={props.onChange} placeholder={props.placeholder} />
            {
                props.arrow &&
                <ArrowButton type="submit">
                    <Arrow fill="black" width={28} height={28} />
                </ArrowButton>
            }
        </InputContainer>
    );
};

export default Input;

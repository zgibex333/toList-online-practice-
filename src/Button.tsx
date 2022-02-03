import React from 'react';
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    buttonName : string
    onClickCallBack: () => void
    active: boolean
}

const Button: React.FC<ButtonPropsType> = ({buttonName, onClickCallBack, active}) => {
    return (
        <button
            className={active ? 'active-btn' : ''}
            onClick={onClickCallBack}>
            {buttonName}
        </button>
    );
};

export default Button;
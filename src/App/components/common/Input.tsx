import React from 'react';
import './Input.scss';

type InputOptions = {
    type: string;
    changeAction: (e: React.ChangeEvent) => void;
    submitAction: (e: React.KeyboardEvent) => void;
    placeholder?: string;
}

const Input = (props: InputOptions) => {
    return (
        <input
            className = 'input'
            type = {props.type}
            onKeyUp = {props.submitAction}
            onChange = {props.changeAction}
        />
    )
}

export default Input;
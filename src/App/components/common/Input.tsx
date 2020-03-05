import React from 'react';

type InputOptions = {
    type: string;
    changeAction: (e: React.ChangeEvent) => void;
    submitAction: (e: React.KeyboardEvent) => void;
    placeholder?: string;
}

const Input = (props: InputOptions) => {
    return (
        <input 
            type = {props.type}
            onKeyUp = {props.submitAction}
            onChange = {props.changeAction}
        />
    )
}

export default Input;
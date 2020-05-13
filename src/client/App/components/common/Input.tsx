import React from 'react';
import './Input.scss';

interface InputProps {
    type: string;
    changeAction: (e: React.ChangeEvent) => void;
    submitAction: (e: React.KeyboardEvent) => void;
    placeholder?: string;
}

const Input: React.FC<InputProps> = props => {
    return (
        <input
            className='input'
            type={props.type}
            onKeyUp={props.submitAction}
            onChange={props.changeAction}
        />
    )
};

export default Input;
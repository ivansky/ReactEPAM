import React from 'react';
import './Button.scss';

type ButtonsOptions = {
    content: string;
    action: (e: React.MouseEvent) => void;
    value?: string;
    disabled?: boolean;
}

const Button = (props: ButtonsOptions) => {
    return (
        <button
            className='button'
            onClick={props.action}
            value={props.content}
            disabled={props.disabled}>{props.content}
        </button>
    )
}

export default Button;
import React from 'react';

type ButtonsOptions = {
    content: string;
    action: (e: React.MouseEvent) => void;
    value?: string;
    disabled?: boolean;
}

const Button = (props: ButtonsOptions) => {
    return (
        <button
            onClick={props.action}
            value={props.content}
            disabled={props.disabled}>{props.content}</button>
    )
}

export default Button;
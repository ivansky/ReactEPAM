import React from 'react';

type ButtonsOptions = {
    content: string;
    action: () => void;
}

const Button = (props: ButtonsOptions) => {
    return (
        <button onClick={props.action}>{props.content}</button>
    )
}

export default Button;
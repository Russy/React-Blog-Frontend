import React from 'react';
import './style.scss';
type Props = {
    type: 'text' | 'password',
    name: string,
    placeholder: string,
    onChange: (event) => void,
    className?: string
}

export default function Input(props: Props) {
    return <input
            {...props}
            className={`input ${props.className}`}
        />;
}
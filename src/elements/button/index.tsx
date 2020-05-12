import * as React from 'react';
import './style.scss';

type Props = {
    type: 'primary' | 'secondary' | 'warning',
    onClick: () => void,
    className?: string,
    children: React.ReactNode
};

export default function Button({type, onClick, children, className} : Props) {
    return <div
        onClick={onClick}
        className={`button ${type} ${className ? className : ''}`}
    >
        {children}
    </div>;
}
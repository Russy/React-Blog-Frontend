import * as React from 'react';
import './style.scss';

type Props = {
    type: 'primary' | 'secondary' | 'warning',

    onClick: () => void
};

export default function Button({type, onClick, children}) {
    return <div
        onClick={onClick}
        className={`button ${type}`}
    >
        {children}
    </div>;
}
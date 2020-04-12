import * as React from 'react';
import './style.scss';

type Props = {
    className?: string;
    children: React.ReactNode
};

export default function Code({children, className}: Props) {
    return <code className={`code ${className ? className : ''}`}>
        {children}
    </code>;
}
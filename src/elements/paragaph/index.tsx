import * as React from 'react';
import './style.scss';

type Props = {
    className?: string;
    children: React.ReactNode;
};

export default function Paragraph({className, children}: Props) {
    return <div className={`${className ? className : ''} paragraph `}>
        {children}
    </div>;
}
import * as React from 'react';
import './style.scss'

type Props = {
    style?: any,
    children: React.ReactNode,
    className?: string
};

export default function SubSection({children, style, className}: Props) {
    return <div style={style} className={`sub-section ${className ? className : ''}`}>
        {children}
    </div>;
}

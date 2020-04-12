import * as React from 'react';
import { ReactChildren } from 'react';
import './style.scss';

export default function Container(props: {children: React.ReactNode}) {
    return <div className="container">
        {props.children}
    </div>;
}
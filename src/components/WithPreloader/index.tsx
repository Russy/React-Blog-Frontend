import React from 'react';
import './style.scss';

type Props = {
    isLoading: boolean;
    children: React.ReactNode,
    className?: string
};

export default function WithPreloader(props: Props) {
    const {isLoading} = props;
    return <div className={`${isLoading ? 'overlay' : ''} ${props.className? props.className : ''}`}>
        {props.children}
    </div>;
};
import React from 'react';
import './style.scss';

type Props = {
    isLoading: boolean;
    children: React.ReactNode
};

export default function WithPreloader(props: Props) {
    const {isLoading} = props;
    return <div className={isLoading ? 'overlay' : ''}>
        {props.children}
    </div>;
};
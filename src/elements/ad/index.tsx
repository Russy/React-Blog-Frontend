import * as React from 'react';
import Paragraph from '../paragaph';
import './style.scss';

type Props = {
    className?: string;
};

export default function Ad({className}: Props) {
    return <div className={`ad mb-20 ${className ? className : ''}`}>
        <Paragraph className={'pt-130'}>
            Ad content
        </Paragraph>
    </div>;
}
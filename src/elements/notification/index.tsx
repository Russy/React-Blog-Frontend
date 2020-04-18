import React from 'react';
import './style.scss';

type Props = {
    message: string;
}

export default function Notification(props: Props) {
    return <div className="notification">
        {props.message}
    </div>;
}
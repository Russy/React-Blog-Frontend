import * as React from 'react';
import './style.scss';

export default function Icon({color, className}) {
    return <div className="icon_img" style={{backgroundColor: `${color}`}}>
        <span className={className ? className : ''} aria-hidden="true"/>
    </div>
}
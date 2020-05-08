import * as React from 'react';
import './style.scss';

export default function Separator({className}: {className?: string}) {
    return <div className={className? `separator ` + className : 'separator'} />;
}
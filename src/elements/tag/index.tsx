import * as React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

type Props = {
    text: string,
    url: string,
    className?: string
};

export default function Tag({text, url,className}: Props) {
    return  <Link className={`tag ${className ? className : ''}`} to={url}>
        {text}
    </Link>

}
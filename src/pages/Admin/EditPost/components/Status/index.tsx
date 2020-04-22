import React from 'react';
import './style.scss';
import Heading from '../../../../../elements/heading';

type Props = {
    status: number,
    onSelect: (value: number) => void,
    className?: string,
};

export default function Status(props: Props) {

    const {status, className, onSelect} = props;

    return <div className={`status ${className ? className : ''}`}>
        <Heading size={'small'} classNames={'mb-10'}>Status</Heading>
        <select
            value={''+status}
            name="status"
            onChange={(e) => {
                const {value} = e.target;
                onSelect(parseInt(value));
            }}
        >
            <option value="0">Draft</option>
            <option value="1">Published</option>
        </select>
    </div>;
}
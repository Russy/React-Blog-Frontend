import React from 'react';
import './style.scss';

type Option = {
    label: string,
    value: string
};

type Props = {
    name?: string,
    options: Option[],
    className?: string,
    onChange: (e: Option) => void,
    value?: string
};

export default function Select(props: Props) {
    const {name, options, className, onChange} = props;
    return <select
        value={props.value}
        className={className ? className : ''} name={name ? name : ''}
        onChange={(e) => {
            onChange(options.find(option => option.value == e.target.value));
        }}
    >
        {options.map(({label, value}: Option, key) => {
            return <option
                key={key}
                value={value}>
                {label}
            </option>;
        })}
    </select>;
}
import React, { useState } from 'react';
import './style.scss';
import Select from '../../../../../elements/Select';
import './style.scss';

type SelectOption = {
    label: string,
    value: string
};
type Props = {
    className?: string,
    options: SelectOption[],
    value: any[],
    onChange: (data: any) => void,
};

export default function SettingsSelect({className, options, onChange, value}: Props) {

    const [val, setVal] = useState('');

    return <div className={className ? `${className} settings-select` : 'settings-select'}>

        <div className="settings-select__wrapper">
            {value.map((option, key) => {
                return <div key={key} className="settings-select__option">
                    <div>-</div>
                    <div className="option-name">{option.label}</div>
                    <div className="remove-icon" onClick={() => {
                        onChange(value.filter((op, k) => k !== key))
                    }} />
                </div>;
            })}
        </div>

        <Select
            value={val}
            options={options}
            onChange={(e) => {
                onChange([...value, e]);
                setVal('');
            }}
        />
    </div>;
}


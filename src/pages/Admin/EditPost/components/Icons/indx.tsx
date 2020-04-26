import React from 'react';
import './style.scss';
import Heading from '../../../../../elements/heading';

type Props = {
    icon: string
    onChange: (icon: string) => void
};

export default function Icons(props: Props) {
    const icons = [
        'fa fa-code',
        'fa fa-gamepad',
        'fa fa-credit-card-alt',
        'fa fa-reddit',
        'fa fa-gift',
        'fa fa-youtube-square',
        'fa fa-steam-square',
        'fa fa-html5',
    ];
    return <div className={'icons'}>
        <Heading
            classNames={'mb-20'}
            size={'small'}
        >
            Icons
        </Heading>
        <div className="icons__body">
            {icons.map((icon, key) => {
                return <div
                    key={key}
                    className="icons__single"
                >
                    <input
                        type="radio"
                        id={`radio-${key}`}
                        name="icon"
                        checked={props.icon === icon}
                        onChange={() => {
                            props.onChange(icon);
                        }}
                    />
                    <label
                        htmlFor={`radio-${key}`}
                    >
                        <span className={icon}/>
                    </label>
                </div>

            })}

        </div>

    </div>;
}

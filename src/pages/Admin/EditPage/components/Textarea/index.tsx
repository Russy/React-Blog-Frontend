import React from 'react';
import Heading from '../../../../../elements/heading';
import './style.scss';
import CKEditor from 'ckeditor4-react';

type Props = {
    className?: string;
    title: string,
    content: string,
    onChange: (content: string) => void,
    name: string
};

export default function Textarea(props: Props) {
    return <div className={`textarea-wrap mb-10 ${props.className ? props.className : ''}`}>
        <Heading size={'small'} classNames={'mb-10'}>{props.title}</Heading>
        <CKEditor
            data={props.content}
            onChange={(event) => {
                const data = event.editor.getData();
                props.onChange(data);
            }}
        />

    </div>;
}
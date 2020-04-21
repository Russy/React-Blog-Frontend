import React from 'react';
import Heading from '../../../../../elements/heading';
import './style.scss';

import CKEditor from '@ckeditor/ckeditor5-react';

declare var ClassicEditor: any;

type Props = {
    className?: string;
    title: string,
    content: string,
    onChange: (content: string) => void,
    name: string
};

export default function Textarea(props: Props) {
    return <div className={`textarea-wrap mb-10 ${props.className ? props.className : ''}`}>
        <Heading size={'small'}>{props.title}</Heading>
        <CKEditor
            editor={ClassicEditor}
            data={props.content}

            onChange={(event, editor) => {
                const data = editor.getData();
                props.onChange(data);
            }}
            onInit={editor => {
                editor.editing.view.change(writer => {
                    writer.setStyle('height', '200px', editor.editing.view.document.getRoot());
                });
            }}
        />

    </div>;
}
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { DELETE_TAG_REQUEST, GET_TAGS_REQUEST, POST_TAGS_REQUEST } from '../../../../../state/tags/actions';
import { StoreState, TagType } from '../../../../../state/types';
import { getTags } from '../../../../../state/tags/selectors';
import Heading from '../../../../../elements/heading';
import WithPreloader from '../../../../../components/WithPreloader';
import Input from '../../../../../elements/Input';
import Button from '../../../../../elements/button';

type Props = {
    postTags: TagType[],
    tags: TagType[],
    getTags: () => void,
    onChange: (tags: TagType, checked: boolean) => void,
    postTag: (tag: string) => void,
    deleteTag: (tagId: number) => void,
};

function Tags(props: Props) {

    const [tags, setTags] = useState([]);
    const [newTag, setNewTags] = useState('');

    //Loading all tags from API
    useEffect(() => {
        props.getTags();
    }, []);

    //Setting selected post tags
    useEffect(() => {
        setTags(props.postTags);
        console.log('test');
    }, [props.tags, props.postTags]);

    return <div className={'tags'}>
        <Heading
            classNames={'mb-20'}
            size={'small'}
        >
            Tags
        </Heading>
        {props.tags.map((tag, key) => {
            return <div key={key} className={'single-tag'}>
                <label htmlFor={`tag-${tag.id}`}>
                    <input
                        id={`tag-${tag.id}`}
                        type="checkbox"
                        checked={tags.map(tag => tag.id).indexOf(tag.id) !== -1}
                        onChange={(e) => {
                            props.onChange(tag, e.currentTarget.checked);
                        }}
                    />
                    {tag.title}
                </label>

                <Button
                    type={'warning'}
                    onClick={() => {
                        props.deleteTag(tag.id);
                    }}
                >
                    X
                </Button>

            </div>;
        })}
        <div className="new-tag">
            <Input
                placeholder={'New tag'}
                type={'text'}
                name={'tag'}
                value={newTag}
                onChange={(e) => {
                    setNewTags(e.target.value);
                }}
                onKeyUp={(event) => {
                    if (event.keyCode == 13) {
                        props.postTag(newTag);
                        setNewTags('');
                    }
                }}
            />
        </div>
    </div>;
}

export default connect(
    (state: StoreState) => ({
        tags: getTags(state)
    }),
    (dispatch) => {
        return {
            getTags: () => {
                dispatch(GET_TAGS_REQUEST());
            },
            postTag: (tag: string) => {
                dispatch(POST_TAGS_REQUEST(tag));
            },
            deleteTag: (tagId: number) => {
                dispatch(DELETE_TAG_REQUEST(tagId));
            }
        };
    }
)(Tags);
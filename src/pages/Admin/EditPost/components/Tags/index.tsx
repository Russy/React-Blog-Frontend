import React, { useEffect, useState } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { GET_TAGS_REQUEST } from '../../../../../state/tags/actions';
import { StoreState, TagType } from '../../../../../state/types';
import { getTags } from '../../../../../state/tags/selectors';
import Heading from '../../../../../elements/heading';
import WithPreloader from '../../../../../components/WithPreloader';

type Props = {
    postTags: TagType[],
    tags: TagType[],
    getTags: () => void,
    onChange: (tags: TagType[]) => void
};

function Tags(props: Props) {

    const [tags, setTags] = useState([]);
    let ids = [];
    ids = props.postTags.map((tag) => tag.id);

    useEffect(() => {
        props.getTags();
    }, []);

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

                        checked={ids.indexOf(tag.id) !== -1}

                        onChange={(e) => {

                           //TODO:Adding on change handler

                        }}
                    />
                    {tag.title}
                </label>
            </div>;
        })}

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
            }
        };
    }
)(Tags);
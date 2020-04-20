import React, { useEffect, useState } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Container from '../../../elements/container';
import FullWidthLayout from '../../../elements/FullWidthLayout';
import WithPreloader from '../../../components/WithPreloader';
import Layout from '../../../elements/layout';
import { PostType, StoreState } from '../../../state/types';
import { getIsFetching, getPost } from '../../../state/post/selectors';
import { GET_EDIT_POST_REQUEST } from '../../../state/post/actions';
import { useParams } from 'react-router-dom';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Heading from '../../../elements/heading';

type Props = {
    getPost: (slug: string) => void;
    post: PostType,
    isFetching: boolean
};

function EditPost(props: Props) {

    const [post, setPost] = useState(props.post);
    let {id} = useParams();

    useEffect(() => {
       props.getPost(id);
       setPost(props.post);
    }, [props.post.id]);


    return <Layout>
        <Container>
            <FullWidthLayout>
                <WithPreloader
                    isLoading={false}
                >
                    <Heading size={'small'}>Content</Heading>
                    <CKEditor
                        editor={ ClassicEditor }
                        data={post.content}
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setPost({
                                ...post,
                                content: data
                            });
                        } }
                    />


                </WithPreloader>
            </FullWidthLayout>
        </Container>
    </Layout>;
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: (slug: string) => {
            dispatch(GET_EDIT_POST_REQUEST(slug));
        }
    };
};

export default connect(
    (state: StoreState) => ({
        post: getPost(state),
        isFetching: getIsFetching(state)
    }),
    mapDispatchToProps
)(EditPost);

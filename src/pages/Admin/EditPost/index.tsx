import React, { useEffect, useState } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Container from '../../../elements/container';
import WithPreloader from '../../../components/WithPreloader';
import Layout from '../../../elements/layout';
import { PostType, StoreState } from '../../../state/types';
import { getIsFetching, getPost } from '../../../state/post/selectors';
import { GET_EDIT_POST_REQUEST, POST_EDIT_POST_REQUEST } from '../../../state/post/actions';
import { useParams } from 'react-router-dom';
import SidebarLayout from '../../../elements/sidebarLayout';
import Textarea from './components/Textarea';
import Button from '../../../elements/button';
import Input from '../../../elements/Input';
import Heading from '../../../elements/heading';

type Props = {
    getPost: (slug: string) => void;
    updatePost: (post: PostType) => void;
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
            <SidebarLayout
                sidebar={<>
                    test
                </>}
            >
                <WithPreloader
                    className={'mb-80'}
                    isLoading={props.isFetching}
                >
                    <Heading
                        size={'small'}
                    >Title</Heading>
                    <Input
                        className={'mb-40'}
                        type={'text'}
                        placeholder={'Title'}
                        name={'title'}
                        value={post.title}
                        onChange={(e) => {
                            setPost({
                                ...post,
                                title: e.target.value
                            });
                        }}
                    />
                    <Textarea
                        name={'excerpt'}
                        title={'Excerpt'}
                        content={post.excerpt ? post.excerpt : ''}
                        onChange={(excerpt) => {
                            if (post.id) {
                                setPost({
                                    ...post,
                                    excerpt
                                });
                            }
                        }}
                    />

                    <Textarea
                        title={'Content'}
                        content={post.content ? post.content : ''}
                        className={'mt-40 mb-30'}
                        name={'content'}
                        onChange={(content) => {
                            if (post.id) {
                                setPost({
                                    ...post,
                                    content
                                });
                            }
                        }}
                    />

                    <Button
                        type={'primary'}
                        onClick={() => {
                            props.updatePost(post);
                        }}
                    >
                        Save
                    </Button>

                </WithPreloader>

            </SidebarLayout>

        </Container>
    </Layout>;
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: (slug: string) => {
            dispatch(GET_EDIT_POST_REQUEST(slug));
        },
        updatePost: (post: PostType) => {
            dispatch(POST_EDIT_POST_REQUEST(post));
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

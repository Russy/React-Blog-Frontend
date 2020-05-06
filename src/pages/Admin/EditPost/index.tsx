import React, { useEffect, useState } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Container from '../../../elements/container';
import WithPreloader from '../../../components/WithPreloader';
import Layout from '../../../elements/layout';
import { PostType, StoreState } from '../../../state/types';
import { getIsFetching, getPost } from '../../../state/post/selectors';
import { CLEAR_POST_REQUEST, GET_EDIT_POST_REQUEST, POST_EDIT_POST_REQUEST, GET_EMPTY_POST_REQUEST } from '../../../state/post/actions';
import { useParams } from 'react-router-dom';
import SidebarLayout from '../../../elements/sidebarLayout';
import Textarea from './components/Textarea';
import Button from '../../../elements/button';
import Input from '../../../elements/Input';
import Heading from '../../../elements/heading';
import Status from './components/Status';
import Tags from './components/Tags';
import Icons from './components/Icons/indx';

type Props = {
    getPost: (slug: string) => void;
    getEmptyPost: () => void;
    updatePost: (post: PostType) => void;
    post: PostType,
    isFetching: boolean,
    clearPost: () => void
};

function EditPost(props: Props) {

    const [post, setPost] = useState(props.post);

    let {id} = useParams();

    useEffect(() => {
        if (id != 'new') {
            props.getPost(id);
        } else {
            props.getEmptyPost();
        }
    }, []);

    useEffect(() => {
        setPost(props.post);
    }, [props.post]);

    return <Layout>
        <Container>
            <SidebarLayout
                sidebar={<>

                    <Status
                        status={post.is_published}
                        onSelect={(is_published) => {
                            setPost({
                                ...post,
                                is_published
                            });
                        }}
                    />

                    <Tags
                        postTags={post.tags}
                        onChange={(tag, checked) => {
                            if (checked) {
                                setPost({
                                    ...post,
                                    tags: [...post.tags, tag]
                                });
                            } else {
                                setPost({
                                    ...post,
                                    tags: post.tags.filter(_tag => _tag.id !== tag.id)
                                });
                            }

                        }}
                    />

                    <Icons
                        icon={post.icon}
                        onChange={(icon) => {
                            setPost({
                                ...post,
                                icon
                            });
                        }}
                    />
                </>}
            >
                <WithPreloader
                    className={'mb-80'}
                    isLoading={props.isFetching}
                >
                    <Heading
                        classNames={'mb-10'}
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
                            if (post.id || id === 'new') {
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
                            if (post.id || id === 'new') {
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
        getEmptyPost: () => {
            dispatch(GET_EMPTY_POST_REQUEST());
        },
        updatePost: (post: PostType) => {
            dispatch(POST_EDIT_POST_REQUEST(post));
        },
        clearPost: () => {
            dispatch(CLEAR_POST_REQUEST());
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

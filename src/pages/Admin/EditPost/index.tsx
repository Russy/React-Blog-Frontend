import React, { useEffect, useState } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Container from '../../../elements/container';
import WithPreloader from '../../../components/WithPreloader';
import Layout from '../../../elements/layout';
import { PostType, StoreState } from '../../../state/types';
import { getIsFetching, getPost } from '../../../state/post/selectors';
import { GET_EDIT_POST_REQUEST } from '../../../state/post/actions';
import { useParams } from 'react-router-dom';
import SidebarLayout from '../../../elements/sidebarLayout';
import Textarea from './components/Textarea';
import Button from '../../../elements/button';

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
            <SidebarLayout
                sidebar={<>
                    test
                </>}
            >
                <WithPreloader
                    className={'mb-80'}
                    isLoading={props.isFetching}
                >
                   <Textarea
                        name={'excerpt'}
                        title={'Excerpt'}
                        content={post.excerpt}
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
                        content={post.content}
                        className={'mt-60 mb-30'}
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
                            console.log(post);
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

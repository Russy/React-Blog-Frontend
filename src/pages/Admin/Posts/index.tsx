import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import FullWidthLayout from '../../../elements/FullWidthLayout';
import Container from '../../../elements/container';
import Layout from '../../../elements/layout';
import { GET_ADMIN_POSTS_REQUEST, GET_POSTS_REQUEST, SEARCH_POSTS_REQUEST } from '../../../state/posts/actions';
import { Pagination as PaginationType, PostType, StoreState } from '../../../state/types';
import { getIsFetching, getPagination, getPosts } from '../../../state/posts/selectors';
import { Link, useParams } from 'react-router-dom';
import Pagination from './components/Pagination';
import WithPreloader from '../../../components/WithPreloader';
import Paragraph from '../../../elements/paragaph';

type Props = {
    posts: PostType[],
    getPosts: (page: string | undefined) => {},
    searchPosts: (query: string) => {},
    isFetching: boolean,
    pagination: PaginationType
};

function Posts(props: Props) {

    const {pagination} = props;

    let {page, query} = useParams();

    useEffect(() => {
        if (query) {
            props.searchPosts(query);
        } else {
            props.getPosts(page);
        }
    }, [page, query]);

    return <Layout>
            <Container>
                <FullWidthLayout>
                    <WithPreloader
                        isLoading={props.isFetching}
                    >
                        <Link
                            className={'button primary mb-20'}
                            to={'/admin/post/new'}
                        >New Post</Link>

                        <div className={'admin-post'}>
                            <div className="admin-post__id">
                                <strong>ID</strong>
                            </div>
                            <div className="admin-post__title">
                                <strong>Title</strong>
                            </div>
                            <div className="admin-post__slug">
                                <strong>Slug</strong>
                            </div>
                            <div className="admin-post__exception">
                                <strong>Exception</strong>
                            </div>
                            <div className="admin-post__published">
                                <strong>Published</strong>
                            </div>
                            <div className="admin-post__controls">
                                <strong>Controls</strong>
                            </div>
                        </div>

                        {props.posts.map((post, key) => {
                            return <div key={key} className={'admin-post'}>
                                <div className="admin-post__id">
                                    {post.id}
                                </div>
                                <div className="admin-post__title">
                                    {post.title}
                                </div>
                                <div className="admin-post__slug">
                                    {post.slug}
                                </div>
                                <div className="admin-post__exception">
                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                                </div>
                                <div className="admin-post__published text-center">
                                    {post.is_published}
                                </div>
                                <div className="admin-post__controls">
                                    <Link
                                        className={'button primary'}
                                        to={`/admin/post/${post.id}`}
                                    >Edit post</Link>
                                </div>
                            </div>;
                        })}

                        {pagination.last_page > 1 ? <Pagination
                            type={'posts'}
                            pagination={pagination}
                        /> : <></>}
                    </WithPreloader>


                </FullWidthLayout>
            </Container>
        </Layout>;
}


const mapDispatchToProps = dispatch => {
    return {
        getPosts: (page) => {
            dispatch(GET_ADMIN_POSTS_REQUEST(page));
        },
        searchPosts: (query) => {
            // dispatch(SEARCH_POSTS_REQUEST(query));
        }
    };
};

export default connect(
    (state: StoreState) => ({
        posts: getPosts(state),
        isFetching: getIsFetching(state),
        pagination: getPagination(state)
    }),
    mapDispatchToProps)(Posts);
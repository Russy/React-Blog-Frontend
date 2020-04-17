import * as React from 'react';
import { connect } from 'react-redux';
import Layout from '../../elements/layout';
import Container from '../../elements/container';
import SidebarLayout from '../../elements/sidebarLayout';
import Ad from '../../elements/ad';
import { GET_POSTS_REQUEST, SEARCH_POSTS_REQUEST } from '../../state/posts/actions';
import { getIsFetching, getPagination, getPosts } from '../../state/posts/selectors';
import Post from '../../components/Post';
import { PostType, StoreState, Pagination as PaginationType } from '../../state/types';
import WithPreloader from '../../components/WithPreloader';
import Pagination from '../../components/Pagination';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Paragraph from '../../elements/paragaph';

type Props = {
    posts: PostType[],
    getPosts: (page: string | undefined) => {},
    searchPosts: (query: string) => {},
    isFetching: boolean,
    pagination: PaginationType
};

function Home(props: Props) {
    let {page, query} = useParams();
    useEffect(() => {
        if (query) {
            props.searchPosts(query);
        } else {
            props.getPosts(page);
        }
    }, [page, query]);

    const {posts, isFetching, pagination} = props;

    return <Layout>
        <Container>
            <SidebarLayout
                sidebar={<>
                    <Ad/>
                    <Ad/>
                </>}
            >
                <WithPreloader isLoading={isFetching}>
                    {posts.length ? posts.map((post: PostType, key) => {
                        return <Post post={post} key={key}/>;
                    }) : <Paragraph>Empty results</Paragraph>}
                    {pagination.last_page > 1 ? <Pagination
                        pagination={pagination}
                    /> : <></>}

                </WithPreloader>

            </SidebarLayout>
        </Container>
    </Layout>;
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: (page) => {
            dispatch(GET_POSTS_REQUEST(page));
        },
        searchPosts: (query) => {
            dispatch(SEARCH_POSTS_REQUEST(query));
        }
    };
};


export default connect((state: StoreState) => ({
    posts: getPosts(state),
    isFetching: getIsFetching(state),
    pagination: getPagination(state)
}), mapDispatchToProps)(Home);
import * as React from 'react';
import { connect } from 'react-redux';
import Layout from '../../elements/layout';
import Container from '../../elements/container';
import SidebarLayout from '../../elements/sidebarLayout';
import Ad from '../../elements/ad';
import { GET_POSTS_REQUEST } from '../../state/posts/actions';
import { getIsFetching, getPagination, getPosts } from '../../state/posts/selectors';
import Post from '../../components/Post';
import { PostType, StoreState, Pagination as PaginationType } from '../../state/types';
import WithPreloader from '../../components/WithPreloader';
import Pagination from '../../components/Pagination';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Props = {
    posts: PostType[],
    getPosts: (page: string | undefined) => {},
    isFetching: boolean,
    pagination: PaginationType
};

function Home(props: Props) {

    let {page} = useParams();

    useEffect(() => {
        props.getPosts(page);
    }, [page]);

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
                    {posts.map((post: PostType, key) => {
                        return <Post post={post} key={key}/>;
                    })}
                    <Pagination
                        pagination={pagination}
                    />
                </WithPreloader>

            </SidebarLayout>
        </Container>
    </Layout>;
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: (page) => {
            dispatch(GET_POSTS_REQUEST(page));
        }
    };
};


export default connect((state: StoreState) => ({
    posts: getPosts(state),
    isFetching: getIsFetching(state),
    pagination: getPagination(state)
}), mapDispatchToProps)(Home);
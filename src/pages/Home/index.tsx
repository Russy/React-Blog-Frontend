import * as React from 'react';
import { connect } from 'react-redux';
import Layout from '../../elements/layout';
import Container from '../../elements/container';
import SidebarLayout from '../../elements/sidebarLayout';
import Ad from '../../elements/ad';
import { DiscussionEmbed } from 'disqus-react';
import { GET_POSTS_REQUEST } from '../../state/posts/actions';
import { getPosts } from '../../state/posts/selectors';
import Post from '../../components/Post';
import { PostType } from '../../state/types';
type Props = {
    posts: PostType[],
    getPosts: () => {}
};
type State = {};

class Home extends React.Component <Props, State> {

    componentDidMount(): void {
        this.props.getPosts();
    }

    render() {
        const {posts} = this.props;

        return <Layout>
            <Container>
                <SidebarLayout
                    sidebar={<>
                        <Ad/>
                        <Ad/>
                    </>}
                >
                    {posts.map((post: PostType, key) => {
                        return <Post  post={post} key={key} />;
                    })}
                </SidebarLayout>
            </Container>
        </Layout>;
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => {
            dispatch(GET_POSTS_REQUEST())
        }
    }
}


export default connect((state) => ({
    posts: getPosts(state)
}), mapDispatchToProps)(Home);
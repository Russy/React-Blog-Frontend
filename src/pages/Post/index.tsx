import React, {useEffect} from 'react';
import Layout from '../../elements/layout';
import Container from '../../elements/container';
import SidebarLayout from '../../elements/sidebarLayout';
import Ad from '../../elements/ad';
import {useParams
} from "react-router-dom";
import { connect } from 'react-redux';
import { GET_POST_REQUEST } from '../../state/post/actions';
import Heading from '../../elements/heading';
import Icon from '../../elements/icon';
import SubSection from '../../elements/subSection';
import moment from 'moment';
import Tag from '../../elements/tag';
import Paragraph from '../../elements/paragaph';
import { getPosts } from '../../state/posts/selectors';
import { getPost } from '../../state/post/selectors';
import { PostType } from '../../state/types';
import { DiscussionEmbed } from 'disqus-react';

type Props = {
    getPost: (slug: string) => void;
    post: PostType
}

function Post(props: Props)  {
        const {post} = props;
        let { slug } = useParams();

        useEffect(() => {
            props.getPost(slug);
        }, []);

    const config = {
        url: 'https://koshelki.pro',
        identifier: 'home',
        title: 'Title',
    };
        return  <Layout>
            <Container>
                <SidebarLayout
                    sidebar={<>
                        <Ad/>
                        <Ad/>
                    </>}
                >
                    <Heading
                        classNames={'pb-30'}
                        size={'large'}
                        icon={
                            <Icon
                                color="#4cc1be"
                                className={post.icon}
                            />
                        }
                    >
                        {post.title}
                    </Heading>
                    <SubSection className="mb-20">
                        Posted at: {moment(post.updated_at).format('D/MM/YYYY')}
                    </SubSection>
                   {/* <SubSection className={'mb-30'} style={{marginTop: '-1px'}}>
                        {post.tags.map((tag, key) => {
                            return  <Tag
                                key={key}
                                text={tag.title}
                                url={`/tags/${tag.slug}`}
                            />;
                        })}
                    </SubSection>*/}
                    <Paragraph>
                        {post.content}
                    </Paragraph>


                    <DiscussionEmbed
                        shortname='example'
                        config={config}
                    />

            </SidebarLayout>
            </Container>;
        </Layout>
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: (slug: string) => {
            dispatch(GET_POST_REQUEST(slug))
        }
    }
};

export default connect(
    (state) => ({
        post: getPost(state)
    }),
    mapDispatchToProps
)(Post);


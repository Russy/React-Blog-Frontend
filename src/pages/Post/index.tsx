import React, { useEffect } from 'react';
import Layout from '../../elements/layout';
import Container from '../../elements/container';
import SidebarLayout from '../../elements/sidebarLayout';
import Ad from '../../elements/ad';
import {
    useParams
} from 'react-router-dom';
import { connect } from 'react-redux';
import { GET_POST_REQUEST } from '../../state/post/actions';
import Heading from '../../elements/heading';
import Icon from '../../elements/icon';
import SubSection from '../../elements/subSection';
import moment from 'moment';
import Tag from '../../elements/tag';
import Paragraph from '../../elements/paragaph';
import { getIsFetching, getPost } from '../../state/post/selectors';
import { PostType, StoreState } from '../../state/types';
import { DiscussionEmbed } from 'disqus-react';
import WithPreloader from '../../components/WithPreloader';

type Props = {
    getPost: (slug: string) => void;
    post: PostType,
    isFetching: boolean
}

function Post(props: Props) {
    const {post} = props;
    let {slug} = useParams();

    useEffect(() => {
        props.getPost(slug);
    }, []);

    const config = {
        url: 'http://loremipsum.space/',
        identifier: post.slug,
        title: post.title,
    };
    return <Layout>
        <Container>
            <SidebarLayout
                sidebar={<>
                    <Ad/>
                    <Ad/>
                </>}
            >
                <WithPreloader isLoading={props.isFetching}>
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
                    <SubSection>
                        Posted at: {moment(post.updated_at).format('D/MM/YYYY')}
                    </SubSection>
                    <SubSection className={'mb-50'} style={{marginTop: '-1px'}}>
                        {post.tags.map((tag, key) => {
                            return <Tag
                                key={key}
                                text={tag.title}
                                url={`/tags/${tag.slug}`}
                            />;
                        })}
                    </SubSection>
                    <Paragraph>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </Paragraph>


                    <DiscussionEmbed
                        shortname='example'
                        config={config}
                    />
                </WithPreloader>

            </SidebarLayout>
        </Container>;
    </Layout>;
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: (slug: string) => {
            dispatch(GET_POST_REQUEST(slug));
        }
    };
};

export default connect(
    (state: StoreState) => ({
        post: getPost(state),
        isFetching: getIsFetching(state)
    }),
    mapDispatchToProps
)(Post);


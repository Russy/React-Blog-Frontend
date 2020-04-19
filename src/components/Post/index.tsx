import * as React from 'react';
import Heading from '../../elements/heading';
import Icon from '../../elements/icon';
import SubSection from '../../elements/subSection';
import moment from 'moment';
import Tag from '../../elements/tag';
import Paragraph from '../../elements/paragaph';
import { PostType } from '../../state/types';
import { Link } from 'react-router-dom';

type Props = {
    post: PostType,
    tagId?: string
}

export default class Post extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        const {post, tagId} = this.props;
        return <div className="mb-60">
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
            <SubSection className={'mb-30'} style={{marginTop: '-1px'}}>
                {post.tags ? post.tags.map((tag, key) => {
                    return  <Tag
                        className={tagId && tagId == tag.slug ? 'active' : ''}
                        key={key}
                        text={tag.title}
                        url={`/tags/${tag.slug}`}
                    />;
                }) : ''}
            </SubSection>
            <Paragraph>
                {post.excerpt}...
            </Paragraph>

            <Link className={"button primary"} to={`/post/${post.slug}`}>
                Read More
            </Link>

        </div>;
    }
}
import * as React from 'react';
import Heading from '../../elements/heading';
import Icon from '../../elements/icon';
import SubSection from '../../elements/subSection';
import moment from 'moment';
import Tag from '../../elements/tag';
import Paragraph from '../../elements/paragaph';
import Code from '../../elements/code';
import { PostType } from '../../state/types';
import { Link } from 'react-router-dom';
import Button from '../../elements/button';

type Props = {
    post: PostType
}

export default class Post extends React.Component<Props, {}> {
    render() {
        const {post} = this.props;
        return <div className="mb-60">
            <Heading
                classNames={'pb-30'}
                size={'large'}
                icon={
                    <Icon
                        color="#4cc1be"
                        className="fa fa-code"
                    />
                }
            >
                {post.title}
            </Heading>
            <SubSection>
                Posted at: {moment(post.updated_at).format('D/MM/YYYY')}
            </SubSection>
            <SubSection className={'mb-30'} style={{marginTop: '-1px'}}>
                {post.tags.map((tag, key) => {
                    return  <Tag
                        key={key}
                        text={tag.title}
                        url={`/tags/${tag.slug}`}
                    />;
                })}
            </SubSection>
            <Paragraph>
                {post.content}
            </Paragraph>

            <Button type="primary" onClick={() => {
                //
            }}>
                Read more
            </Button>


        </div>;
    }
}
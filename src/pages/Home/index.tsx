import * as React from 'react';
import { connect } from 'react-redux';
import Layout from '../../elements/layout';
import Container from '../../elements/container';
import SidebarLayout from '../../elements/sidebarLayout';
import Heading from '../../elements/heading';
import Icon from '../../elements/icon';
import SubSection from '../../elements/subSection';
import moment from 'moment';
import Tag from '../../elements/tag';
import Paragraph from '../../elements/paragaph';
import Code from '../../elements/code';
import Ad from '../../elements/ad';
import { DiscussionEmbed } from 'disqus-react';
import { GET_POSTS_REQUEST } from '../../state/posts/actions';

type Props = {
    getPosts: any
};
type State = {};

class Home extends React.Component <Props, State> {

    componentDidMount(): void {

        this.props.getPosts();
    }

    render() {

        const config = {
            url: 'https://koshelki.pro',
            identifier: 'home',
            title: 'Title',
        };

        return <Layout>
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
                                className="fa fa-code"
                            />
                        }
                    >
                        Main header
                    </Heading>

                    <SubSection>
                        Posted at: {moment().format('D/MM/YYYY')}
                    </SubSection>

                    <SubSection className={'mb-30'} style={{marginTop: '-1px'}}>
                        <Tag
                            text={'test'}
                            url={'/'}
                        />

                        <Tag
                            text={'lorem ipsum dollar'}
                            url={'/'}
                        />
                    </SubSection>

                    <Paragraph>
                        В этом уроке мы сделаем дизайн и код нашего первого веб-сайта простым и лёгким способом. Урок
                        рассчитан на новичков с надеждой дать вам инструменты для написания собственных сайтов
                        согласно принятым стандартам! Начало новой недели; возможно, время получить новый навык!
                    </Paragraph>

                    <Paragraph>
                        <Code>
                            {
                                `
                                .sub-section {
                                padding: 20px 0;
                                border-top: solid 1px #e4e4e4;
                                border-bottom: solid 1px #e4e4e4;
                            }`
                            }
                        </Code>
                    </Paragraph>

                    <DiscussionEmbed
                        shortname='example'
                        config={config}
                    />

                </SidebarLayout>
            </Container>
        </Layout>;
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => {
            dispatch(GET_POSTS_REQUEST)
        }
    }
}

export default connect(null, mapDispatchToProps)(Home);
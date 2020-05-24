import * as React from 'react';
import { connect } from 'react-redux';
import Layout from '../../elements/layout';
import Container from '../../elements/container';
import { PageType, StoreState } from '../../state/types';
import { getIsFetching, getPage } from '../../state/page/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SidebarLayout from '../../elements/sidebarLayout';
import Ad from '../../elements/ad';
import WithPreloader from '../../components/WithPreloader';
import Heading from '../../elements/heading';
import SubSection from '../../elements/subSection';
import moment from 'moment';
import Paragraph from '../../elements/paragaph';

import { GET_PAGE_REQUEST } from '../../state/page/actions';

type Props = {
    getPage: (slug: string) => void,
    page: PageType,
    isFetching: boolean
};

function Page(props: Props) {

    const {page} = props;
    let {slug} = useParams();

    useEffect(() => {
        props.getPage(slug);
    }, [slug]);

    return <Layout>
        <Container>
            <SidebarLayout
                sidebar={<>
                    <Ad/>
                </>}
            >
                <WithPreloader isLoading={props.isFetching}>
                    <Heading
                        classNames={'pb-30'}
                        size={'large'}
                        /*icon={
                            <Icon
                                color="#4cc1be"
                                className={page.icon}
                            />
                        }*/
                    >
                        {page.title}
                    </Heading>
                    <SubSection>
                        Posted at: {moment(page.updated_at).format('D/MM/YYYY')}
                    </SubSection>
                    <Paragraph className={'mt-20'}>
                        <div dangerouslySetInnerHTML={{ __html: page.content }} />
                    </Paragraph>


                  {/*  <DiscussionEmbed
                        shortname='example'
                        config={config}
                    />*/}
                </WithPreloader>

            </SidebarLayout>
        </Container>;
    </Layout>;

}

const mapDispatchToProps = dispatch => {
    return {
        getPage: (slug: string) => {
            dispatch(GET_PAGE_REQUEST(slug));
        }
    };
};

export default connect(
    (state: StoreState) => ({
        page: getPage(state),
        isFetching: getIsFetching(state)
    }),
    mapDispatchToProps
)(Page);


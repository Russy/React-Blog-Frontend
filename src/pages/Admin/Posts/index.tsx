import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import FullWidthLayout from '../../../elements/FullWidthLayout';
import Container from '../../../elements/container';
import Layout from '../../../elements/layout';

type Props = {};

function Posts(props: Props) {

    return <Layout>
            <Container>
                <FullWidthLayout>
                    test
                </FullWidthLayout>
            </Container>
        </Layout>;
}

export default connect(
    null,
    null
)(Posts);
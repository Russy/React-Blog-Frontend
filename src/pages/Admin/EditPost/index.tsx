import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Container from '../../../elements/container';
import FullWidthLayout from '../../../elements/FullWidthLayout';
import WithPreloader from '../../../components/WithPreloader';
import Layout from '../../../elements/layout';

type Props = {};

function EditPost(props: Props) {

    return <Layout>
        <Container>
            <FullWidthLayout>
                <WithPreloader
                    isLoading={false}
                >
                    test
                </WithPreloader>
            </FullWidthLayout>
        </Container>
    </Layout>;
}

export default connect(
    null,
    null
)(EditPost);
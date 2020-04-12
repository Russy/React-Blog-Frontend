import * as React from 'react';
import {connect} from "react-redux";
import Layout from '../../elements/layout';
import Container from '../../elements/container';

type Props = {};
type State = {};

class About extends React.Component <Props, State> {

    render() {
        return  <Layout>
            <Container>
                About page
            </Container>
        </Layout>;
    }
};

export default connect(null, null)(About);
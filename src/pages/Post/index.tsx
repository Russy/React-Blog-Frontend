import React, {useEffect} from 'react';
import Layout from '../../elements/layout';
import Container from '../../elements/container';
import SidebarLayout from '../../elements/sidebarLayout';
import Ad from '../../elements/ad';
import {useParams
} from "react-router-dom";

export default function Post()  {
        let { slug } = useParams();

        useEffect(() => {
            console.log('hjk');
        });

        return  <Layout>
            <Container>
                <SidebarLayout
                    sidebar={<>
                        <Ad/>
                        <Ad/>
                    </>}
                >
                test
            </SidebarLayout>
            </Container>;
        </Layout>
}


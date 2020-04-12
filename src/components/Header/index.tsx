import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Menu from './components/menu';
import Search from './components/search';
import Container from '../../elements/container';
import Separator from './components/separator';
import Logo from './components/logo';
import Button from '../../elements/button';

type Props = {};

class Header extends React.Component<Props, Props> {
    render() {
        return <div>
            <div className="header pt-10 pb-10">
                <Container>
                    <div className="columns">
                        <div className="column">
                            <Logo />
                        </div>
                        <div className="column pt-20 pb-20">
                            <Button
                                type={'primary'}
                                onClick={() => {
                                    console.log('subscribe');
                                }}
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <Menu/>
                        </div>
                        <div className="column">
                            <Search/>
                        </div>
                    </div>
                </Container>
            </div>
            <Separator/>
        </div>
            ;
    }
}

export default connect(
    null,
    null
)(Header);
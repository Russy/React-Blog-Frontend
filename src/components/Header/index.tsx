import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import Menu from './components/menu';
import Search from './components/search';
import Container from '../../elements/container';
import Separator from './components/separator';
import Logo from './components/logo';
import Button from '../../elements/button';
import { Link } from 'react-router-dom';
import { Storage } from '../../libs/storage';
import AdminMenu from './components/adminMenu';

type Props = {};

export default function Header() {
    const token = Storage.get('token');
    return <div>
        <div className="header pt-10 pb-10">
            <Container>
                <div className="columns">
                    <div className="column">
                        <Logo/>
                    </div>
                    <div className="column pt-20 pb-20">

                        {token ? <>
                            <Link className={'button primary mr-10'} to={`/admin`}>
                                Admin
                            </Link>

                            <Button
                                type={'primary'}
                                onClick={() => {
                                    Storage.remove('token');
                                    document.location.reload();
                                }}
                            >
                                Logout
                            </Button>

                        </> : <Link className={'button primary'} to={`/login`}>
                            Login
                        </Link>}

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
        { token
            ?
            <AdminMenu /> :
            <Separator/>
        }
    </div>;
}

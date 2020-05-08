import React from 'react';
import './style.scss';
import Separator from '../separator';
import Container from '../../../../elements/container';
import { NavLink } from 'react-router-dom';

export default function AdminMenu() {

    return <>
        <Container>
            <div className="admin-menu">
                <ul>
                    <li>
                        <NavLink to="/" >
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" >
                            Pages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" >
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Container>
        <Separator className={'mt-5'}/>
    </>;
}
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
                        <NavLink to="/admin" >
                            Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/pages" >
                            Pages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/settings" >
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Container>
        <Separator className={'mt-5'}/>
    </>;
}
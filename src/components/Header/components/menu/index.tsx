import * as React from 'react';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';

type Props = {};

class Menu extends React.Component<Props, any> {

    render() {
        return <>
            <ul className="main-menu">
                <li>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                </li>
            </ul>
        </>;
    }
}

export default Menu;
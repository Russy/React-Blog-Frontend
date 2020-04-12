import * as React from 'react';
import './style.scss';
import Container from '../../elements/container';
import { Link } from 'react-router-dom';

export default function Footer() {

    return <footer className={'footer'}>
        <Container>
            <div className="footer__content">
                <div className="footer__links">
                    <div className="footer__links-heading">Links</div>
                    <ul className="footer__links-list">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="copyright">
                    © All right
                </div>
                <div className="social">
                    <ul>
                        <li>
                            <Link to={''}>
                                twitter
                            </Link>
                        </li>
                        <li>
                            <Link to={''}>
                                facebook
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </footer>;
}
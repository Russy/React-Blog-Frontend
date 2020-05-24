import * as React from 'react';
import './style.scss';
import Container from '../../elements/container';
import { Link, NavLink } from 'react-router-dom';
import { Option } from '../../state/settings/state';
import { connect } from 'react-redux';
import { StoreState } from '../../state/types';
import { getOptions } from '../../state/settings/selectors';

type Props = {
    options: any[]
};

function Footer({options}: Props) {
    const menu = getOption(options, 'footer-menu', []) as [];

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
                        {menu.map(({value, label}, key) => {
                            return <li key={key}>
                                <NavLink to={`/pages/${value}`}>
                                    {label}
                                </NavLink>
                            </li>;
                        })}
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="copyright">
                    © {getOption(options, 'title', '')}
                </div>
                <div className="social">
                    <ul>
                        <li>
                            <Link to={''} onClick={() => {
                                document.location.href = 'https://twitter.com/GabrielSayler';
                            }}>
                                twitter
                            </Link>
                        </li>
                        <li>
                            <Link to={''} onClick={() => {
                                document.location.href = 'https://www.facebook.com/ruslan.kolibabcuk';
                            }}>
                                facebook
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </footer>;
}

const getOption = (options: Option[], option, def: string | []) => {
    const op = options.find((op) => op.name === option);
    return op ? op.value : def;
}


export default connect(
    (state: StoreState) => ({
        options: getOptions(state)
    }),
    null
)(Footer);

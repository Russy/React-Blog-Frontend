import * as React from 'react';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';
import { GET_POST_REQUEST } from '../../../../state/post/actions';
import { connect } from 'react-redux';
import { StoreState } from '../../../../state/types';
import { getIsFetching, getPost } from '../../../../state/post/selectors';
import { Option } from '../../../../state/settings/state';
import { getOptions } from '../../../../state/settings/selectors';

type Props = {
    options: any[]
};

function Menu({options}: Props) {
    const menu = getOption(options, 'main-menu', []) as [];
    return <>
        <ul className="main-menu">
            <li>
                <NavLink to={'/'}>
                    Home
                </NavLink>
            </li>
            {menu.map(({value, label}, key) => {
                return <li key={key}>
                    <NavLink to={`/page/${value}`}>
                        {label}
                    </NavLink>
                </li>;
            })}
        </ul>
    </>;

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
)(Menu);


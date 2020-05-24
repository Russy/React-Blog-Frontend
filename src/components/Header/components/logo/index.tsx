import * as React from 'react';
import './style.scss';
import { Option } from '../../../../state/settings/state';
import { connect } from 'react-redux';
import { StoreState } from '../../../../state/types';
import { getOptions } from '../../../../state/settings/selectors';
import { Link } from 'react-router-dom';

type Props = {
    options: any[]
};

function Logo({options}: Props) {
    return <Link to={'/'} className="main-logo">
        {getOption(options, 'title', '')}
    </Link>;
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
)(Logo);


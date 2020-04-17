import React from 'react';
import './style.scss';
import { Pagination as PaginationType } from '../../state/types';
import { Link } from 'react-router-dom';

type Props = {
    pagination: PaginationType
}

export default function Pagination(props: Props) {
    const {pagination} = props;

    return <ul className="pagination">
        {new Array(pagination.last_page).fill(null).map((obj, key) => {
            return <li key={key}>
                <Link
                    onClick={() => {
                        window.scrollTo(0,0);
                    }}
                    className={(key+1) === pagination.current_page ? 'active' : '' } to={`/page/${key+1}`}>
                    {key+1}
                </Link>
            </li>;
        })}

    </ul>;
}
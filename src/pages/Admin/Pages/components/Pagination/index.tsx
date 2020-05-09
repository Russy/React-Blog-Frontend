import React, { useEffect, useState } from 'react';
import './style.scss';
import { Pagination as PaginationType } from '../../../../../state/types';
import { Link } from 'react-router-dom';

type Props = {
    pagination: PaginationType,
    type: 'tags' | 'posts',
    slug?: string
}

export default function Pagination(props: Props) {
    const {pagination} = props;

    const [active, setActive] = useState(0);

    useEffect(() => {
        setActive(pagination.current_page);
    }, [pagination]);

    return <ul className="pagination">
        {new Array(pagination.last_page).fill(null).map((obj, key) => {
            let link =  `/admin/page/${key + 1}`;
            return <li key={key}>
                <Link
                    onClick={() => {
                            setActive(key+1);
                        }}
                    className={(key + 1) === active ? 'active' : ''} to={link}
                >
                    {key + 1}
                </Link>
            </li>;
        })}

    </ul>;
}
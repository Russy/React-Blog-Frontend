import React, { useState } from 'react';
import './style.scss';
import { useHistory } from "react-router-dom";

export default function Search() {
    const [query, setQuery] = useState('');
    const history = useHistory();

    return <>
        <div className="search-form">
            <input
                onChange={(event) => {
                    setQuery(event.currentTarget.value);
                }}
                onKeyUp={(event) => {
                    if(event.keyCode == 13){
                        event.preventDefault();
                        history.push(`/search/${query}`);
                        setQuery('');
                    }
                }}
                type="text"
                value={query}
                placeholder="Search..."
            />
            <div className="fa fa-search"/>
        </div>
    </>;
}

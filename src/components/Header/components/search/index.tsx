import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './style.scss';

function Search() {
    const [term, test] = useState('');
    return <>
        <div className="search-form">
            <input
                onChange={(event) => {
                    test(event.currentTarget.value);
                }}
                type="text"
                value={term}
                placeholder="Search..."
            />
            <div className="fa fa-search"/>
        </div>
    </>;
}

export default connect(null, null)(Search);
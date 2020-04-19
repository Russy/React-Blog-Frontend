import * as React from 'react';

export default function FullWidthLayout({children}) {
    return <div className="columns pt-30">
        <div className="column pr-10">
            {children}
        </div>
    </div>
}
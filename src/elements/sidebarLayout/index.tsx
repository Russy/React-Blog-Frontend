import * as React from 'react';

export default function SidebarLayout({children, sidebar}) {
    return <div className="columns pt-30">
        <div className="column pr-10">
            {children}
        </div>
        <div className="column pl-10 hide-mobile">
            {sidebar}
        </div>
    </div>
}
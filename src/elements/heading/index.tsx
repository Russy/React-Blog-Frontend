import * as React from 'react';
import './style.scss';

type Props = {
    size?: 'large' | 'medium' | 'small',
    children: React.ReactNode,
    icon?: React.ReactNode,
    classNames?: string
};

export default function Heading({size, children, icon, classNames}: Props) {

    let content = <div className="heading__wrapper">
        <div className="heading__icon pr-10">
            {icon}
        </div>
        <div className="heading__content">
            {children}
        </div>
    </div>;
   switch (size) {
       case 'large':
           return <h1 className={`heading large ${classNames ? classNames : ''}`}>
               {icon ? content : children}
           </h1>;
       case 'medium':
           return <h3 className={`heading medium ${classNames ? classNames : ''}`}>
               {icon ? content : children}
           </h3>;
       case 'small':
           return <h5 className={`heading small ${classNames ? classNames : ''}`}>
               {icon ? content : children}
           </h5>;
       default:
           return <h1 className={`heading large ${classNames ? classNames : ''}`}>
               {icon ? content : children}
           </h1>;
   }
}
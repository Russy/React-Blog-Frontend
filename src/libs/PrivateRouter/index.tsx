import React from 'react';
import Tags from '../../pages/Tags';
import {Storage} from '../storage'
import { Route } from 'react-router-dom';
type Props = {
    isPrivate: boolean,
    path: string,
    children: React.ReactNode,
    exact?:boolean
}

export default function PrivateRouter(props: Props) {

    if (props.isPrivate) {
        const token = Storage.get('token');
        if (token) {
            return <Route path={props.path} exact={props.exact}>
                {props.children}
            </Route>
        } else {
            document.location.href = '/'
        }
    } else {
        return <Route path={props.path} exact={props.exact}>
            {props.children}
        </Route>
    }

}
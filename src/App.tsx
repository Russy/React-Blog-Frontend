import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from './pages/Post';
import Tags from './pages/Tags';
import Login from './pages/Login';
import Posts from './pages/Admin/Posts';
import PrivateRouter from './libs/PrivateRouter';

const routes = [
    {
        path: '/about',
        is_private: false,
        component: <About/>
    }, {
        path: '/post/:slug',
        is_private: false,
        component:  <Post/>
    }, {
        path: '/tags/:slug/page/:page',
        is_private: false,
        component: <Tags/>
    }, {
        path: '/tags/:slug',
        is_private: false,
        component:  <Tags/>
    }, {
        path: '/page/:page',
        is_private: false,
        component:   <Home/>
    }, {
        path: '/search/:query',
        is_private: false,
        component:   <Home/>
    }, {
        path: '/Login',
        is_private: false,
        component:  <Login/>
    }, {
        path: '/admin',
        is_private: true,
        component: <Posts/>
    }, {
        path: '/admin/post/:id',
        is_private: true,
        component: <Posts/>
    }, {
        path: '/admin/pages',
        is_private: true,
        component: <Posts/>
    }, {
        path: '/admin/page/:id',
        is_private: true,
        component: <Posts/>
    }, {
        path: '/admin/settings',
        is_private: true,
        component: <Posts/>
    }, {
        path: '/',
        is_private: false,
        component: <Home/>
    },
];

export default function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    {routes.map((route, key) => {
                       return   <PrivateRouter
                           key={key}
                           isPrivate={route.is_private}
                           path={route.path}
                       >
                           {route.component}
                       </PrivateRouter>
                    })}
                </Switch>
            </Router>
        </div>
    );
}

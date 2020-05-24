import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import Tags from './pages/Tags';
import Login from './pages/Login';
import Posts from './pages/Admin/Posts';
import PrivateRouter from './libs/PrivateRouter';
import EditPost from './pages/Admin/EditPost';
import Pages from './pages/Admin/Pages';
import EditPage from './pages/Admin/EditPage';
import Settings from './pages/Admin/Settings';
const publicRoutes = [{
    path: '/about',
    component: <About/>
}, {
    path: '/post/:slug',
    component: <Post/>
}, {
    path: '/tags/:slug/page/:page',
    component: <Tags/>
}, {
    path: '/tags/:slug',
    component: <Tags/>
}, {
    path: '/page/:page',
    component: <Home/>
}, {
    path: '/search/:query',
    component: <Home/>
}, {
    path: '/login',
    component: <Login/>
},

    {
        path: '/',
        component: <Home/>
    }
];
const routes = [
    {
        path: '/admin/post/:id',
        component: <EditPost/>
    },
    {
        path: '/admin/pages/page/:page',
        component: <Pages/>
    },{
        path: '/admin/pages/:id',
        component: <EditPage/>
    },
    {
        path: '/admin/pages',
        component: <Pages/>
    }, {
        path: '/admin/settings',
        component: <Settings/>
    },{
        path: '/admin/page/:page',
        component: <Posts/>
    },
    {
        path: '/admin',
        component: <Posts/>
    }
];

export default function App() {
    return (
        <div className="App">
            <Router>
                <Switch>

                    {routes.map((route, key) => {
                        return <PrivateRouter
                            key={key}
                            isPrivate={true}
                            path={route.path}
                        >
                            {route.component}
                        </PrivateRouter>;
                    })}
                    {publicRoutes.map((route, key) => {
                    return <PrivateRouter
                        key={key}
                        isPrivate={false}
                        path={route.path}
                    >
                        {route.component}
                    </PrivateRouter>;
                })}
                </Switch>
            </Router>
        </div>
    );
}

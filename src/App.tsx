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

export default function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/post/:slug">
                        <Post/>
                    </Route>
                    <Route path="/page/:page">
                        <Home/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

import React from 'react';
import './App.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

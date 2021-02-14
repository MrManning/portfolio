import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Core from './core/CoreComponent';
import Home from './pages/HomePage';
import NotFound from './pages/NotFound';

const componentMap = {
    Core,
    Home,
    NotFound
};

function App() {
    const pages = componentMap;

    return (
        <Router>
            <pages.Core>
                <Switch>
                    <Route exact path={'/'} render={() => <pages.Home/>}/>
                    <Route render={() => <pages.NotFound/>}/>
                </Switch>
            </pages.Core>
        </Router>
    );
}

export default App;

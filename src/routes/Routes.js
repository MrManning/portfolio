import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import App from '../core/CoreComponent';
import Home from '../pages/HomeComponent';
import Books from '../pages/Books';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const componentMap = {
    App,
    Home,
    Books,
    Dashboard,
    NotFound
};

function Routes() {
    const pages = componentMap;

    return (
        <Router>
            <pages.App>
                <Switch>
                    <Route exact path={'/'} render={() => <pages.Home/>}/>
                    <Route exact path={'/books'} render={() => <pages.Books/>}/>
                    <Route exact path={'/dashboard'} render={() => <pages.Dashboard/>}/>
                    <Route render={() => <pages.NotFound/>}/>
                </Switch>
            </pages.App>
        </Router>
    );
}

export default Routes;
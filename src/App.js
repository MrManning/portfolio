import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Layout from 'components/Layout';
import Home from 'components/Home';
import NotFound from 'components/NotFound';

const componentMap = {
  Home,
  NotFound,
};

function App() {
  const pages = componentMap;

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <pages.Home />} />
          <Route path="*" render={() => <pages.NotFound />} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

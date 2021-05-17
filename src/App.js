import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Lock from './pages/Lock';

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/lock" exact>
          <Lock />
        </Route>
        <Route>
          <h1>Error 404</h1>
          <h4> Page not found</h4>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

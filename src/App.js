import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show'

function App() {
  return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/starred" exact>
          <Starred />
        </Route>
        <Route path="/show/:id" exact>
          <Show />
        </Route>
        <Route>
          <h1>Error 404</h1>
          <h4> Page not found</h4>
        </Route>
      </Switch>
  );
}

export default App;

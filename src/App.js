import React from 'react';
import {Switch,Route} from 'react-router-dom'

function App() {
  return <Switch>

      <Route path="/" exact>
          <h1>This is home page</h1>
      </Route>
      <Route path="/lock" exact>
          <h1>This is locked page</h1>
      </Route>
      <Route>
          <h1>Error 404</h1>
          <h4> Page not found</h4>
      </Route>

  </Switch>
}

export default App;

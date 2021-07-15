import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { Admin, Home } from './pages';

interface AppProps {}
function App({}: AppProps) {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path='/' exact render={Home} />
          <Route path='/admin'>
            <Admin />
          </Route>
        </Switch>
      </Router>
       
    </BrowserRouter>
  );
}

export default App;

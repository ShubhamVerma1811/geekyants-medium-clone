import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Admin, Home } from './pages';

interface AppProps {}
function App({}: AppProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
       
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login, Post, Signup, Topic, Write } from './pages'

interface AppProps {}
function App({}: AppProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/write' component={Write} />
        <Route path='/signup' component={Signup} />
        <Route path='/post/:username/:pid' component={Post} />
        <Route path='/topic/:topic_name' component={Topic} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

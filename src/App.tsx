import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login, Post, Signup, Topic } from './pages'

interface AppProps {}
function App({}: AppProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/post/:pid' component={Post} />
        <Route path='/topic/:topic_name' component={Topic} />
      </Switch>
       
    </BrowserRouter>
  )
}

export default App

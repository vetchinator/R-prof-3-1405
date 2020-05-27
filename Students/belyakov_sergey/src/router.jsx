import React, {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import App from './components/App.jsx'
import Profile from './components/Profile/index.jsx'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={App} exact/>
        <Route path='/chat/1/' render={() => <App roomId={1}/>} exact/>
        <Route path='/chat/2/' render={() => <App roomId={2}/>} exact/>
        <Route path='/chat/3/' render={() => <App roomId={3}/>} exact/>
        <Route path='/chat/4/' render={() => <App roomId={4}/>} exact/>
        <Route path='/profile/' component={Profile} exact/>
      </Switch>
    )
  }
}


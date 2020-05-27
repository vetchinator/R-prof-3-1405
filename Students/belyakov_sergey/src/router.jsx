import React, {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import App from './components/App.jsx'
import Profile from './components/Profile/index.jsx'

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={App} exact/>
        <Route
          path='/chat/:id'
          render={(obj) => <App roomId={Number(obj.match.params.id)}/>}
          exact
        />
        <Route path='/profile/' component={Profile} exact/>
      </Switch>
    )
  }
}


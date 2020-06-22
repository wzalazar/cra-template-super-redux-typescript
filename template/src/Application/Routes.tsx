import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from 'Pages/Home'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
)

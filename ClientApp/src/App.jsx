import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import Add from './pages/Add'
import Question from './pages/Question'
import View from './pages/View'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import './custom.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/question" component={Question} />
          <Route exact path="/view" component={View} />
          <Route exact path="/search" component={Search} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}

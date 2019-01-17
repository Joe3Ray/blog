import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch, Redirect } from 'react-router-dom'

import configureStore from './store'
import lazyloader from 'com/lazyloader'

import './iconfont'

const history = createBrowserHistory()
const store = configureStore(history)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/categories' component={lazyloader('categories')} />
          <Route path='/tags' component={lazyloader('tags')} />
          <Route path='/archives' component={lazyloader('archives')} />
          <Route path='/' component={lazyloader('home')} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}

render()

import './index.less'

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch, Redirect } from 'react-router-dom'

import configureStore from './store'
import lazyloader from 'com/lazyloader'
import HeadBand from 'com/headband'
import SideNav from 'com/sidenav'

const history = createBrowserHistory()
const store = configureStore(history)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div id='wrapper'>
          <HeadBand />
          <div id='container'>
            <SideNav />
            <Switch>
              <Route path='/' component={lazyloader('home')} />
              <Redirect to='/home' />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}

render()

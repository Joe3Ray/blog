import styles from './index.less'

import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch, Redirect, Link, NavLink } from 'react-router-dom'

import configureStore from './store'
import lazyloader from 'com/lazyloader'
import HeadBand from 'com/headband'
import Footer from 'com/footer'
import Brand from 'com/brand'

import './iconfont'

const history = createBrowserHistory()
const store = configureStore(history)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div id={styles.wrapper}>
        <HeadBand />
        <Router history={history}>
          <div id={styles.container}>
            <div className={styles['sidenav-wrapper']}>
              <Brand />
              <nav className={styles['menu-wrapper']}>
                <ul>
                  <li>
                    <NavLink exact to='/' className={styles['menu-item']} activeClassName={styles['menu-selected']}>
                      <svg className={styles.icon} aria-hidden='true'>
                        <use xlinkHref='#icon-house' />
                      </svg>
                      首页
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to='/categories' className={styles['menu-item']} activeClassName={styles['menu-selected']}>
                      <svg className={styles.icon} aria-hidden='true'>
                        <use xlinkHref='#icon-menu-box' />
                      </svg>
                      分类
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to='/about' className={styles['menu-item']} activeClassName={styles['menu-selected']}>
                      <svg className={styles.icon} aria-hidden='true'>
                        <use xlinkHref='#icon-person' />
                      </svg>
                      关于
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to='/archives' className={styles['menu-item']} activeClassName={styles['menu-selected']}>
                      <svg className={styles.icon} aria-hidden='true'>
                        <use xlinkHref='#icon-box' />
                      </svg>
                      归档
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to='/tags' className={styles['menu-item']} activeClassName={styles['menu-selected']}>
                      <svg className={styles.icon} aria-hidden='true'>
                        <use xlinkHref='#icon-tags' />
                      </svg>
                      标签
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to='/search' className={styles['menu-item']} activeClassName={styles['menu-selected']}>
                      <svg className={styles.icon} aria-hidden='true'>
                        <use xlinkHref='#icon-search' />
                      </svg>
                      搜索
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className={styles['sidenav-info-wrapper']}>
                <img className={styles.avatar} src='https://joeray61.com/images/joeray61.png' />
                <p className={styles.name}>JoeRay61</p>
                <p className={styles.slogan}>野蛮生长ing~</p>
                <div className={styles['sidenav-info']}>
                  <Link className={styles['sidenav-info-link']} to='/archives'>
                    <p>17</p>
                    <p>日志</p>
                  </Link>
                  <Link className={styles['sidenav-info-link']} to='/categories'>
                    <p>1</p>
                    <p>分类</p>
                  </Link>
                  <Link className={styles['sidenav-info-link']} to='/tags'>
                    <p>16</p>
                    <p>标签</p>
                  </Link>
                </div>
                <a className={styles.rss} href='/rss'>
                  <svg className={styles.icon} aria-hidden='true'>
                    <use xlinkHref='#icon-rss' />
                  </svg>
                  &nbsp;RSS
                </a>
                <div className={styles.social}>
                  <a href='https://github.com/Joe3Ray'>
                    <svg className={styles.icon} aria-hidden='true'>
                      <use xlinkHref='#icon-github' />
                    </svg>
                    &nbsp;GitHub
                  </a>
                  <a href='http://weibo.com/u/1997891561'>
                    <svg className={styles.icon} aria-hidden='true'>
                      <use xlinkHref='#icon-weibo' />
                    </svg>
                    &nbsp;Weibo
                  </a>
                </div>
                <div className={styles['friend-links']}>
                  <h3>
                    <svg className={styles.icon} aria-hidden='true'>
                      <use xlinkHref='#icon-earth' />
                    </svg>
                    &nbsp;友情链接
                  </h3>
                  <div>
                    <a href='https://schoeu.com/'>Schoeu</a>
                  </div>
                  <div>
                    <a href='https://xuexb.com/'>前端小武</a>
                  </div>
                </div>
              </div>
            </div>
            <div id={styles.content}>
              <Switch>
                <Route exact path='/categories' component={lazyloader('categories')} />
                <Route exact path='/tags' component={lazyloader('tags')} />
                <Route exact path='/' component={lazyloader('home')} />
                <Redirect to='/' />
              </Switch>
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    </Provider>,
    document.getElementById('app')
  )
}

render()

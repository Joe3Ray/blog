import React from 'react'
import T from 'prop-types'
import classnames from 'classnames'

import HeadBand from 'com/headband'
import Brand from 'com/brand'
import Footer from 'com/footer'
import avatar from 'common/imgs/avatar.png'

import styles from './index.less'

export default class Frame extends React.PureComponent {
  static propTypes = {
    children: T.element.isRequired
  }

  render () {
    const menuList = [
      {
        url: '/',
        icon: '#icon-house',
        text: '首页'
      },
      {
        url: '/categories',
        icon: '#icon-menu-box',
        text: '分类'
      },
      {
        url: '/about',
        icon: '#icon-person',
        text: '关于'
      },
      {
        url: '/archives',
        icon: '#icon-box',
        text: '归档'
      },
      {
        url: '/tags',
        icon: '#icon-tags',
        text: '标签'
      },
      {
        url: '/search',
        icon: '#icon-search',
        text: '搜索'
      }
    ]
    const menu = menuList.map(item => {
      const { url, icon, text } = item
      const kls = classnames({
        [styles['menu-item']]: true,
        [styles['menu-selected']]: location.pathname === url
      })
      return (
        <li key={icon}>
          <a href={url} className={kls}>
            <svg className={styles.icon} aria-hidden='true'>
              <use xlinkHref={icon} />
            </svg>
            {text}
          </a>
        </li>
      )
    })

    return (
      <div id={styles.wrapper}>
        <HeadBand />
        <div id={styles.container}>
          <div className={styles['sidenav-wrapper']}>
            <Brand />
            <nav className={styles['menu-wrapper']}>
              <ul>
                {menu}
              </ul>
            </nav>
            <div className={styles['sidenav-info-wrapper']}>
              <img className={styles.avatar} src={avatar} />
              <p className={styles.name}>JoeRay61</p>
              <p className={styles.slogan}>野蛮生长ing~</p>
              <div className={styles['sidenav-info']}>
                <a className={styles['sidenav-info-link']} href='/archives'>
                  <p>17</p>
                  <p>日志</p>
                </a>
                <a className={styles['sidenav-info-link']} href='/categories'>
                  <p>1</p>
                  <p>分类</p>
                </a>
                <a className={styles['sidenav-info-link']} href='/tags'>
                  <p>16</p>
                  <p>标签</p>
                </a>
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
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

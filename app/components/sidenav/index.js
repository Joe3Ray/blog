import React from 'react'
import { Link } from 'react-router-dom'

import Brand from 'com/brand'
import Menu from 'com/menu'

import styles from './index.less'

export default class SideNav extends React.PureComponent {
  render () {
    return (
      <div className={styles['sidenav-wrapper']}>
        <Brand />
        <Menu />
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
    )
  }
}

import React from 'react'

import Frame from 'com/frame'

import styles from './index.less'

export default class Categories extends React.PureComponent {
  render () {
    return (
      <Frame>
        <div className={styles['categories-wrapper']}>
          <header>分类</header>
          <p className={styles['categories-summary']}>
            目前共计 1 个分类
          </p>
          <ul>
            <li>
              <a className={styles['categories-link']} href='/categories/技术'>技术</a>
              <span>(17)</span>
            </li>
            <li>
              <a className={styles['categories-link']} href='/categories/技术'>技术</a>
              <span>(17)</span>
            </li>
          </ul>
        </div>
      </Frame>
    )
  }
}

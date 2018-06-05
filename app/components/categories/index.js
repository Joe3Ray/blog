import React from 'react'
import { Link } from 'react-router-dom'

import styles from './index.less'

export default class Categories extends React.PureComponent {
  render () {
    return (
      <div className={styles['categories-wrapper']}>
        <header>分类</header>
        <p className={styles['categories-summary']}>
          目前共计 1 个分类
        </p>
        <ul>
          <li>
            <Link className={styles['categories-link']} to='/categories/技术'>技术</Link>
            <span>(17)</span>
          </li>
          <li>
            <Link className={styles['categories-link']} to='/categories/技术'>技术</Link>
            <span>(17)</span>
          </li>
        </ul>
      </div>
    )
  }
}

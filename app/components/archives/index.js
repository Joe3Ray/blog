import React from 'react'

import Frame from 'com/frame'
import ArticleTitle from 'com/article/title'

import styles from './index.less'

export default class Archives extends React.PureComponent {
  render () {
    return (
      <Frame>
        <div className={styles['archives-wrapper']}>
          <div className={styles['archives-item']}>
            <h3>2018年</h3>
            <ArticleTitle />
            <ArticleTitle />
            <ArticleTitle />
            <ArticleTitle />
            <ArticleTitle />
          </div>
          <div className={styles['archives-item']}>
            <h3>2019年</h3>
            <ArticleTitle />
            <ArticleTitle />
            <ArticleTitle />
            <ArticleTitle />
            <ArticleTitle />
          </div>
        </div>
      </Frame>
    )
  }
}

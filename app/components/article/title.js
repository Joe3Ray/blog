import React from 'react'

import styles from './title.less'

export default class ArticleTitle extends React.PureComponent {
  render () {
    return (
      <div className={styles['article-title']}>
        <i />
        <a href=''>客服兜底的产品设计案例</a>
        <p>
          (2018/12/24 · 标签: <a href=''>产品设计</a>，<a href=''>客服</a> · 分类: <a href=''>技术</a>)
        </p>
      </div>
    )
  }
}

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './index.less'

class TagLink extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render () {
    const { text } = this.props
    const colorNum = Math.round(Math.random() * 8 + 1)
    const fontSize = Math.round(Math.random() * 18 + 12)

    const styleSheet = {
      color: `#${colorNum}${colorNum}${colorNum}`,
      fontSize: `${fontSize}px`
    }

    return (
      <Link
        to={`/tags/${text}`}
        className={styles['tag-link']}
        style={styleSheet}
      >
        {text}
      </Link>
    )
  }
}

export default class Tags extends React.PureComponent {
  render () {
    const tags = [
      'JavaScript',
      'es6',
      'git',
      'promise',
      'rollup',
      'underscore',
      '预加载',
      'vue.js',
      'webrtc',
      '性能',
      '打包',
      '构建'
    ]

    return (
      <div className={styles['tags-wrapper']}>
        <header>标签</header>
        <p className={styles['tags-summary']}>
          目前共计 {tags.length} 个标签
        </p>
        <div className={styles['tags-list']}>
          {
            tags.map((tag, i) => (
              <TagLink text={tag} key={i} />
            ))
          }
        </div>
      </div>
    )
  }
}

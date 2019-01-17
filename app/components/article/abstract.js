import React from 'react'
import T from 'prop-types'

import styles from './abstract.less'

export default class ArticleAbstract extends React.PureComponent {
  static propTypes = {
    title: T.string.isRequired,
    id: T.string.isRequired,
    content: T.string.isRequired,
    author: T.string.isRequired,
    date: T.string.isRequired,
    avatar: T.string.isRequired,
    categories: T.array.isRequired
  }

  render () {
    const { title, id, content, author, date, avatar, categories } = this.props
    const categoriesNum = categories.length
    const categoriesLinks = categories.map((item, i) => {
      return (
        <span key={i}>
          <a className={styles['category-link']} href={`/categories/${item}`}>
            {item}
          </a>
          {i + 1 < categoriesNum ? ', ' : null}
        </span>
      )
    })

    return (
      <article className={styles.post}>
        <header>
          <a className={styles['post-title']} href={`/post/${id}`}>
            {title}
          </a>
        </header>
        <section>
          {content} »
        </section>
        <footer>
          <span>
            <img src={avatar} className={styles.avatar} />
            {author} on {categoriesLinks}
          </span>
          <span>{date}</span>
        </footer>
      </article>
    )
  }
}

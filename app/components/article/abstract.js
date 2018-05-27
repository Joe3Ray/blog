import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './abstract.less'

export default class ArticleAbstract extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired
  }

  render () {
    const { title, id, content, author, date, avatar, categories } = this.props
    const categoriesNum = categories.length
    const categoriesLinks = categories.map((item, i) => {
      return (
        <span key={i}>
          <Link className={styles['category-link']} to={`/categories/${item}`}>
            {item}
          </Link>
          {i + 1 < categoriesNum ? ', ' : null}
        </span>
      )
    })

    return (
      <article className={styles.post}>
        <header>
          <Link className={styles['post-title']} to={`/post/${id}`}>
            {title}
          </Link>
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

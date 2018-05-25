import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from './index.less'

class MenuLink extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  }

  render () {
    const { id, title, to } = this.props
    return (
      <NavLink to={to} className={styles['menu-item']} activeClassName={styles['menu-selected']}>
        <svg className={styles.icon} aria-hidden='true'>
          <use xlinkHref={id} />
        </svg>
        {title}
      </NavLink>
    )
  }
}

export default class Menu extends React.PureComponent {
  render () {
    return (
      <nav className={styles['menu-wrapper']}>
        <ul>
          <li>
            <MenuLink id='#icon-house' title='首页' to='/' />
          </li>
          <li>
            <MenuLink id='#icon-menu-box' title='分类' to='/categories' />
          </li>
          <li>
            <MenuLink id='#icon-person' title='关于' to='/about' />
          </li>
          <li>
            <MenuLink id='#icon-box' title='归档' to='/archives' />
          </li>
          <li>
            <MenuLink id='#icon-tags' title='标签' to='/tags' />
          </li>
          <li>
            <MenuLink id='#icon-search' title='搜索' to='/search' />
          </li>
        </ul>
      </nav>
    )
  }
}

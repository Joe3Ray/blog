import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.less'

export default class Menu extends React.PureComponent {
  render () {
    return (
      <nav className='menu-wrapper'>
        <ul>
          <li>
            <NavLink to='/' className='menu-item' activeClassName='menu-selected'>
              <svg className='icon' aria-hidden='true'>
                <use xlinkHref='#icon-house' />
              </svg>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to='/categories' className='menu-item' activeClassName='menu-selected'>
              <svg className='icon' aria-hidden='true'>
                <use xlinkHref='#icon-menu-box' />
              </svg>
              分类
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='menu-item' activeClassName='menu-selected'>
              <svg className='icon' aria-hidden='true'>
                <use xlinkHref='#icon-person' />
              </svg>
              关于
            </NavLink>
          </li>
          <li>
            <NavLink to='/archives' className='menu-item' activeClassName='menu-selected'>
              <svg className='icon' aria-hidden='true'>
                <use xlinkHref='#icon-box' />
              </svg>
              归档
            </NavLink>
          </li>
          <li>
            <NavLink to='/tags' className='menu-item' activeClassName='menu-selected'>
              <svg className='icon' aria-hidden='true'>
                <use xlinkHref='#icon-tags' />
              </svg>
              标签
            </NavLink>
          </li>
          <li>
            <NavLink to='/search' className='menu-item' activeClassName='menu-selected'>
              <svg className='icon' aria-hidden='true'>
                <use xlinkHref='#icon-search' />
              </svg>
              搜索
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

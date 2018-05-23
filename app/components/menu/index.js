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
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to='/categories' className='menu-item' activeClassName='menu-selected'>
              分类
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='menu-item' activeClassName='menu-selected'>
              关于
            </NavLink>
          </li>
          <li>
            <NavLink to='/archives' className='menu-item' activeClassName='menu-selected'>
              归档
            </NavLink>
          </li>
          <li>
            <NavLink to='/tags' className='menu-item' activeClassName='menu-selected'>
              标签
            </NavLink>
          </li>
          <li>
            <NavLink to='/search' className='menu-item' activeClassName='menu-selected'>
              搜索
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

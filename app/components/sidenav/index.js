import React from 'react'

import Brand from 'com/brand'
import Menu from 'com/menu'

import './index.less'

export default class SideNav extends React.PureComponent {
  render () {
    return (
      <div className='sidenav-wrapper'>
        <Brand />
        <Menu />
      </div>
    )
  }
}

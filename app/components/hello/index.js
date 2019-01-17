import React from 'react'
import T from 'prop-types'

import './index.less'

export default class Hello extends React.Component {
  static propTypes = {
    info: T.string.isRequired,
    fetchUserInfo: T.func.isRequired
  }

  componentDidMount () {
    this.props.fetchUserInfo()
  }

  render () {
    return (
      <div className='hello'>
        <p>You: Hello, I am Front-end!</p>
        <p>Backend: {this.props.info}</p>
      </div>
    )
  }
}

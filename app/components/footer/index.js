import React from 'react'

import styles from './index.less'

export default class Footer extends React.PureComponent {
  render () {
    return (
      <div className={styles['footer-wrapper']}>
        © 2016 - 2018  JoeRay61 京ICP备16027522号
      </div>
    )
  }
}

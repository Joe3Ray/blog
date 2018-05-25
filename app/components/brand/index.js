import React from 'react'

import styles from './index.less'

export default class Brand extends React.PureComponent {
  render () {
    return (
      <div className={styles['brand-wrapper']}>
        <h3>JoeRay61</h3>
        <p>make things make sense</p>
      </div>
    )
  }
}

import React, { Component } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from 'src/styles/index.module.scss'

class Footer extends Component {
  render() {
    return (
      <div id={styles.footer} style={{ cursor: 'default' }}>
        {screen.width > 600 ? (
          <div id={styles.footerDesktop}>
            <div id={styles.footerLeft}>Created using React.js</div>
            <div id={styles.footerRight}>Version: 0.0</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

export default Footer

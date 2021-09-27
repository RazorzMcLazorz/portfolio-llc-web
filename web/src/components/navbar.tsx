import React, { Component } from 'react'
import { Link } from '@redwoodjs/router'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from 'src/styles/index.module.scss'

class NavBar extends Component {
  render() {
    return (
      <div id={styles.NavBar}>
        <Link className={styles.NavBarBack} to="/">
          <i className="fas fa-chevron-left"></i>
        </Link>
        <div></div>
      </div>
    )
  }
}

export default NavBar

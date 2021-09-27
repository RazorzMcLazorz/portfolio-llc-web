import React, { Component } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from 'src/styles/index.module.scss'

class EnergyFall extends Component {
  render() {
    return (
      <div className={styles.energyBackground}>
        <div className={styles.energy} />
      </div>
    )
  }
}

export default EnergyFall

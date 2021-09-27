import React, { Component } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from 'src/styles/index.module.scss'

interface IProps {
  title: string
  summary: string
}

class SkillCreator extends Component<IProps> {
  looper = (summary) => {
    console.log(summary)
    const sum2 = summary.split('[[')
    console.log(sum2)
    if (sum2.length <= 1) {
      return summary
    } else {
      // for (let i = 0; i < sum2.length; i++) {}
    }
  }

  render() {
    return (
      <div id={styles.SkillCreator}>
        <div className={styles.skillsBoxHeader}>{this.props.title}</div>
        <div className={styles.skillsBoxContent}>
          {this.looper(this.props.summary)}
        </div>
      </div>
    )
  }
}

export default SkillCreator

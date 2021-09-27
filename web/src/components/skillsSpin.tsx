import React, { Component } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from 'src/styles/index.module.scss'

const LanguageWordsOuter = [
  'React.js',
  'JavaScript',
  'Python',
  'HTML',
  'SCSS',
  'TypeScript',
  'Redux.js',
  'REST',
  'HTTP',
]
const LanguageWordsInner = [
  'AWS Amplify',
  'BASH',
  'ZSH',
  'GIT',
  'MySQL',
  'Node.js',
]

interface IProps {}

class SkillsSpin extends Component<IProps> {
  render() {
    return (
      <div id={styles.skillsSpinContainer}>
        {LanguageWordsOuter.map((word, indx) => (
          <div
            className={styles.spin}
            key={'skillSpinOuter' + indx}
            style={{ animationDelay: '-' + indx * 1.1 + 's' }}
          >
            <div className={styles.words}>{word}</div>
          </div>
        ))}
        {LanguageWordsInner.map((word, indx) => (
          <div
            className={styles.spinInner}
            key={'skillSpinInner' + indx}
            style={{ animationDelay: '-' + indx * 1.65 + 's' }}
          >
            <div className={styles.words}>{word}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default SkillsSpin

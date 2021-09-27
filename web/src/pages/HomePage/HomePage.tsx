import React, { Component } from 'react'
import { Link } from '@redwoodjs/router'
import NameSigned from '../../components/nameSigned'

interface IProps {
  styles: any
}

class HomePage extends Component<IProps> {
  state = {
    langColLeft: [
      'React.js',
      'JavaScript',
      'Python',
      'HTML',
      'SCSS',
      'TypeScript',
      'Redux.js',
      'REST',
    ],
    langColRight: [
      'AWS Amplify',
      'BASH',
      'ZSH',
      'GIT',
      'MySQL',
      'Node.js',
      'HTTP',
      'ITerm',
    ],
    website: {
      JavaScript: 'https://www.javascript.com/',
      'Node.js': 'https://nodejs.org/en/',
      TypeScript: 'https://www.typescriptlang.org/',
      'React.js': 'https://reactjs.org/',
      'Redux.js': 'https://redux.js.org/',
      MySQL: 'https://www.mysql.com/',
      ClearDB: 'https://www.cleardb.com/',
      SCSS: 'https://sass-lang.com/',
      PowerShell: 'https://powershell.org/',
      'C++': 'http://www.cplusplus.com/',
      ITerm: 'https://iterm2.com/index.html',
      GIT: 'https://git-scm.com/',
      ZSH: 'https://www.zsh.org/',
      BASH: 'https://www.gnu.org/software/bash/',
      'AWS Amplify': 'https://aws.amazon.com/amplify/',
      HTML: 'https://html.spec.whatwg.org/',
      Python: 'https://www.python.org/',
      REST: 'https://restfulapi.net/',
      HTTP: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
    },
  }

  languages(lang) {
    return (
      <a
        target="_blank"
        href={this.state.website[lang]}
        className="homeLanguagesListColumnItem"
        rel="noreferrer"
      >
        {lang}
      </a>
    )
  }

  render() {
    const { styles } = this.props
    return (
      <div id={styles.home} className={styles.energyBackground}>
        <div id={styles.homeNav}>
          <Link to="projects" className={styles.homeNavLink}>
            Projects
          </Link>
          <Link to="skills" className={styles.homeNavLink}>
            Skills
          </Link>
          <Link to="contact" className={styles.homeNavLink}>
            Contact
          </Link>
          <a
            href="https://github.com/RazorzMcLazorz"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square" style={{ fontSize: 40 }}></i>
          </a>
        </div>
        <div id={styles.homeBody}>
          <div className={styles.homeNameBox}>
            <h1 className={styles.homeName}>
              <span>N</span>
              <span>a</span>
              <span>t</span>
              <span>h</span>
              <span>a</span>
              <span>n</span>
              <span>i</span>
              <span>e</span>
              <span>l</span>
              <pre> </pre>
              <span>P</span>
              <span>.</span>
              <pre> </pre>
              <span>Y</span>
              <span>o</span>
              <span>u</span>
              <span>n</span>
              <span>g</span>
            </h1>
            <h5>Frontend Developer</h5>
          </div>
          <div className={styles.homeGoal}>
            <div className={styles.homeGoalName}>My Goal</div>
            <div className={styles.homeGoalBody}>
              I want to be a vital team member in your company, that&#39;s why I
              constantly have new projects to work on all the time testing
              myself on new languages, Programing styles, and messing with new
              technologies, and always reading up to the latest in tech news. I
              have experience in being a frontend developer for 3+ years now,
              and currently, I&#39;m a frontend developer at Rovitracker and
              work on the critical frontend projects there. I love react.js with
              a passion and it brings me joy to build projects in this
              framework.
            </div>
            <div className={styles.homeGoalBody}>
              I believe in simplicity to the user interface, but displaying all
              information to those users with out cluttering there screen.
            </div>
            <div className={styles.homeGoalBody}>
              This goal can never end as every project can spark new ideas and
              better ways to improve the user interface.
            </div>
            <div className={styles.homeGoalName}>My Education</div>
            <div className={styles.homeGoalBody}>
              Bottega is the coding boot camp i went to learn javascript and
              python.
            </div>
            <div className={styles.homeGoalBody}>
              UVU is the school I&#39;m currently in and working towards a
              bachelors degree in computer science.
            </div>
          </div>
          <div className={styles.homeLanguages}>
            <div className={styles.homeLanguagesName}>Languages I Know</div>
            <div className={styles.homeLanguagesList}>
              <div className={styles.homeLanguagesListColumn}>
                {this.state.langColLeft.map((project, key) => (
                  <div className={styles.homeLanguagesListColumnItem} key={key}>
                    {this.languages(project)}
                  </div>
                ))}
              </div>
              <div className={styles.homeLanguagesListColumn}>
                {this.state.langColRight.map((project, key) => (
                  <div className={styles.homeLanguagesListColumnItem} key={key}>
                    {this.languages(project)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id={styles.homeRightSide}>
          <NameSigned />
          <a href="/contact">
            <img alt="" src="assets/Logo 1.png" />
          </a>
        </div>
      </div>
    )
  }
}

export default HomePage

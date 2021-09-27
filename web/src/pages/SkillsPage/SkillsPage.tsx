import React, { Component } from 'react'
import { Head } from '@redwoodjs/web'
import NavBar from 'src/components/navbar'
import SkillsSpin from 'src/components/skillsSpin'
import StylesType from 'src/StylesType'

interface IProps {
  styles: StylesType
}

class SkillsPage extends Component<IProps> {
  render() {
    const { styles } = this.props
    return (
      <div id={styles.skills}>
        <Head>
          <title>Skills</title>
        </Head>
        <NavBar />
        <div id={styles.skillsDetails}>
          <div className={styles.skillsMiddle}>
            <SkillsSpin />
            <div className={styles.skillsBox}>
              <div className={styles.skillsBoxHeader}>Javascript</div>
              <div className={styles.skillsBoxContent}>
                <p>
                  I Started to Learn Javascript after learning the basics of
                  Python and HTML/CSS. and it&#39;s where I started making small
                  Console Projects on repl.it, then started with connecting
                  HTML/CSS with Javascript, to make basic function website
                  projects. Than brought React.JS into the mix creating a really
                  good dynamic mix allowing me to create a simple more organized
                  code base without having to manually modify the DOM. I
                  practiced with React.JS for a few weeks getting the hang of
                  the &#34;this&#34; statement and the React State, and Props,
                  when I felt more comfortable with those types of methods, I
                  went and included a new codebase as an addition to React and
                  that is Redux allowing me to store variables in a Redux store
                  that connects everywhere instead of duplicating it. with this
                  knowledge, I spent making projects like Black Jack as a
                  website hosted by Heroku, and many others.
                </p>
              </div>
            </div>
            <div className={styles.skillsBox}>
              <div className={styles.skillsBoxHeader}>Python 2.7 - 3.0</div>
              <div className={styles.skillsBoxContent}>
                <p>
                  Python was the 3rd coding language I learned after C# and C++
                  and it came very natural to me and allowed me to understand
                  more complicated methods such as loops, most of my Python
                  coding was on repl.it which I used as a baseline to create the
                  Black Jack Game{' '}
                  <a
                    target="_blank"
                    href="https://repl.it/@Razorz/BlackJack"
                    rel="noreferrer"
                  >
                    https://repl.it/@Razorz/BlackJack
                  </a>
                  , I than converted that to Javascript. the other thing I built
                  with python used selenium python to create an automated system
                  to do a diagnostic check on some of the websites always
                  changing modules.
                </p>
              </div>
            </div>
            <div className={styles.skillsBox}>
              <div className={styles.skillsBoxHeader}>HTML & CSS</div>
              <div className={styles.skillsBoxContent}>
                <p>
                  These Website languages is what I used to style and order this
                  entire website, I use the SCSS style more than SASS but mostly
                  just becasue its the newest version. HTML and CSS are pretty
                  much straight forward its just align than style with CSS /
                  SCSS, although I am still learning alot with CSS especially
                  animations.
                </p>
              </div>
            </div>
            <div className={styles.skillsBox}>
              <div className={styles.skillsBoxHeader}>React</div>
              <div className={styles.skillsBoxContent}>
                <p>
                  Learning React came as a necessity but quickly turned into a
                  love for building in react, with most of the projects built
                  from React, Webpack, and Bootstrap. with some of the projects,
                  I tend to use Material-UI to show the ability to follow a
                  design pattern, but mostly I like creating the component from
                  scratch, and it helps develop my skills with everything.
                </p>
              </div>
            </div>
            <div className={styles.skillsBox}>
              <div className={styles.skillsBoxHeader}>
                How long ive been coding...
              </div>
              <div className={styles.skillsBoxContent}>
                <p>
                  My Coding Career started when I joined a Coding BootCamp
                  called Bottega.tech in July of 2018 to October of 2018, where
                  I graduated from the class and started working with a Company
                  Called RoviTracker, I started working here November of 2018
                  till now. My Experience level, in my opinion, is at a junior
                  to mid-level as I&#39;m at the point where I can create a
                  fully functional website and iterate on it and make it follow
                  specific guidelines, this website your reading this on
                  doesn&#39;t use too much material-UI in it as I&#39;m trying
                  to show my React, Redux, SCSS skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsPage

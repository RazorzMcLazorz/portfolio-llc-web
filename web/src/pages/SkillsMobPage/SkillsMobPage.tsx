import React, { Component } from 'react'
import NavBar from 'src/components/navbar'
import StylesType from 'src/StylesType'

interface IProps {
  styles: StylesType
}

class SkillsMobPage extends Component<IProps> {
  state = {
    start: 'im the state',
  }

  render() {
    const { styles } = this.props
    return (
      <div id={styles.skillsMob}>
        <NavBar />
        <div id={styles.skillsMobDetails}>
          <div className={styles.skillsMobMiddle}>
            <div className={styles.skillsMobBox}>
              <div className={styles.skillsMobBoxHeader}>Javascript</div>
              <div className={styles.skillsMobBoxContent}>
                With JavaScript, I&#39;ve spent about 6+ Weeks learning,
                building stuff on repl.it, CodePen, Visual Studio Code making
                the Basic Html CSS Websites, and React / Redux. React is what
                allows websites to be needed loaded once so its smooth
                transition between pages. With React I know how to manage the
                State and the this statement while within the class components.
                Redux is an addition to React to allow everything to be put into
                the store and distriputed to all files allowing seemless data
                transfer instead of importing.
              </div>
            </div>
            <div className={styles.skillsMobBox}>
              <div className={styles.skillsMobBoxHeader}>HTML & CSS</div>
              <div className={styles.skillsMobBoxContent}>
                These Website languages is what I used to style and order this
                entire website, I use the SCSS style more than SASS but mostly
                just becasue its the newest version. HTML and CSS are pretty
                much straight forward its just align than style with CSS / SCSS,
                although I am still learning alot with CSS especially
                animations.
              </div>
            </div>
            <div className={styles.skillsMobBox}>
              <div className={styles.skillsMobBoxHeader}>Python 2.7 - 3.0</div>
              <div className={styles.skillsMobBoxContent}>
                Learned Python which I can build small games with, and websites
                with just it&#39;s not recommended so it&#39;s very useful in
                teaching myself how to build certain complex javascript I write
                it out in python if it works together I convert it to JavaScript
                speeding my production because JavaScript can be confusing and
                not fun when building complex so having the blueprint helps
                build it.
              </div>
            </div>
            <div className={styles.skillsMobBox}>
              <div className={styles.skillsMobBoxHeader}>
                How long ive been coding...
              </div>
              <div className={styles.skillsMobBoxContent}>
                I can take a Website Assignment and using React build a
                completely functional websites fit with connections between a
                DataBase and the Website being able to respond to user logins /
                Admin logins using CSS and HTML make the Website look Decent
                built to your liking, and how you want it to look I can change
                to fit today&#39;s designs.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsMobPage

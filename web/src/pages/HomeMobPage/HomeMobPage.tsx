import React, { Component } from 'react'
import Footer from 'src/components/footer'
import { Link } from '@redwoodjs/router'
import NameSigned from 'src/components/nameSigned'
import StylesType from 'src/StylesType'

interface IProps {
  styles: StylesType
}

class HomeMobPage extends Component<IProps> {
  state = {}

  // Swapp Original Website into this and this new one to mobile

  render() {
    const { styles } = this.props
    return (
      <div id={styles.homeMob}>
        <div id={styles.mobile}>
          <div id={styles.mobileName}>
            <h4 className={styles.mobHomeName}>
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
            </h4>
          </div>
          <h6>Frontend Developer</h6>
          <NameSigned />
          <div id={styles.mobileLogo}>
            <img alt="" src="assets/Logo 1.png" />
          </div>
          <div id={styles.mobileLinks}>
            <Link to="/projects" className={styles.mobileLinkButtons}>
              Projects
            </Link>
            <Link to="/skills" className={styles.mobileLinkButtons}>
              My Skills
            </Link>
            <Link to="/contact" className={styles.mobileLinkButtons}>
              Contact Me
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomeMobPage

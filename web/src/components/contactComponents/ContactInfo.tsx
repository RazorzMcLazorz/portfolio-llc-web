import React, { Component } from 'react'
import StylesType from 'src/StylesType'

interface IProps {
  isMobile: boolean
  styles: StylesType
}

class ContactInfo extends Component<IProps> {
  render() {
    const { styles } = this.props
    return (
      <div className={styles.ContactInfo}>
        <div
          className={
            this.props.isMobile
              ? styles.ContactInfoNameMob
              : styles.ContactInfoName
          }
        >
          My Contact Info
        </div>
        <div>You can find me at these links</div>
        <div className={styles.MYLinks}>
          <a
            href="https://github.com/RazorzMcLazorz"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.facebook.com/RazorzMcLazorz"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nate-p-young/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div>Or</div>
        <div className={styles.MYLinksTop}>Manually message me at: </div>

        <div className={styles.MYLinksTop3} id={styles.email}>
          nateyoungdev@gmail.com
        </div>
      </div>
    )
  }
}

export default ContactInfo

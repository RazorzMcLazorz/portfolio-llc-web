import React, { Component } from 'react'

interface IProps {
  isMobile: boolean
}

class ContactInfo extends Component<IProps> {
  render() {
    return (
      <div className="ContactInfo">
        <div
          className={
            this.props.isMobile ? 'ContactInfoNameMob' : 'ContactInfoName'
          }
        >
          My Contact Info
        </div>
        <div>You can find me at these links</div>
        <div className="MYLinks">
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
        <div className="MYLinksTop">Manually message me at: </div>

        <div className="MYLinksTop3" id="email">
          nateyoungdev@gmail.com
        </div>
      </div>
    )
  }
}

export default ContactInfo

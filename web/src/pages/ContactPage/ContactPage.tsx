import React, { Component } from 'react'
import Navbar from 'src/components/navbar'
import ContactInfo from 'src/components/contactComponents/ContactInfo'
import Refferences from 'src/components/contactComponents/Refferences'
import ResumeInfo from 'src/components/contactComponents/ResumeInfo'
import StylesType from 'src/StylesType'

interface IProps {
  styles: StylesType
}

class ContactPage extends Component<IProps> {
  render() {
    const { styles } = this.props
    return (
      <div id={styles.contact}>
        <Navbar />
        <div className={styles.contactLeftSide}>
          <ContactInfo isMobile={false} />
          <ResumeInfo isMobile={false} />
        </div>
        <div className={styles.contactRightSide}>
          <Refferences isMobile={false} />
        </div>
      </div>
    )
  }
}

export default ContactPage

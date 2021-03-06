import React, { Component } from 'react'
import { Head } from '@redwoodjs/web'
import Navbar from 'src/components/navbar'
import ContactInfo from 'src/components/contactComponents/ContactInfo'
import Refferences from 'src/components/contactComponents/Refferences'
import ResumeInfo from 'src/components/contactComponents/ResumeInfo'
import StylesType from 'src/StylesType'

interface IProps {
  styles: StylesType
}

class ContactMobPage extends Component<IProps> {
  render() {
    const { styles } = this.props
    return (
      <div id={styles.contactMob}>
        <Head>
          <title>Contact</title>
        </Head>
        <Navbar />
        <ContactInfo isMobile />
        <Refferences isMobile />
        <ResumeInfo isMobile />
      </div>
    )
  }
}

export default ContactMobPage

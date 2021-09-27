/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Resume from './Resume.pdf'
import print from 'print-js'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from 'src/styles/index.module.scss'

interface IProps {
  isMobile: boolean
}

class ResumeInfo extends Component<IProps> {
  render() {
    return (
      <div className={styles.ResumeInfo}>
        <div
          className={
            this.props.isMobile
              ? styles.ContactInfoNameMob
              : styles.ResumeInfoName
          }
        >
          Resume
        </div>
        <div onClick={() => print(Resume)} className={styles.pdfRender}>
          <Document file={Resume} renderMode="canvas" renderTextLayer={false}>
            <Page
              pageNumber={1}
              height={this.props.isMobile ? 300 : 500}
              renderMode="canvas"
              renderTextLayer={false}
            />
          </Document>
        </div>
      </div>
    )
  }
}

export default ResumeInfo

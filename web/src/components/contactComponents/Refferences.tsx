import React, { Component } from 'react'
import StylesType from 'src/StylesType'

interface IProps {
  isMobile: boolean
  styles: StylesType
}

class Refferences extends Component<IProps> {
  state = {
    refferences: [
      {
        name: 'Buck Brady',
        affiliation: 'CTO at Rovitracker.inc',
        phoneNumber: '385-207-6257',
        email: 'bbrady145@gmail.com',
        HIGTK: '',
      },
      {
        name: 'Taylor Millar',
        affiliation: 'Backend Developer at Rovitracker.inc',
        phoneNumber: '801-691-4362',
        email: '',
        HIGTK: '',
      },
    ],
  }

  render() {
    const { styles } = this.props
    return (
      <div className={styles.Refferences}>
        <div
          className={
            this.props.isMobile
              ? styles.ContactInfoNameMob
              : styles.RefferenceName
          }
        >
          Refferences
        </div>
        {this.state.refferences.map((refference, key) => (
          <div className={styles.RefferenceContainer} key={key}>
            <div>
              {refference.name} - {refference.phoneNumber}
            </div>
            <div>{refference.email}</div>
            <div>{refference.affiliation}</div>
            <div className={styles.RefferenceDivder} />
          </div>
        ))}
      </div>
    )
  }
}

export default Refferences

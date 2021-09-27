import React, { Component } from 'react'
import { Head } from '@redwoodjs/web'
import NavBar from 'src/components/navbar'
import StylesType from 'src/StylesType'
import websiteData from 'src/values/websiteData'

interface IProps {
  styles: StylesType
}

class ProjectsMobPage extends Component<IProps> {
  project(project) {
    const { styles } = this.props
    return (
      <div className={styles['mobProject-box']}>
        <div className={styles['mobProject-title']}>
          {websiteData.projects.title[project]}
        </div>
        <div className={styles['mobProject-details']}>
          <div className={styles['mobProject-description']}>
            {websiteData.projects.summary[project]}
          </div>
          <div className={styles['mobProject-buttons']}>
            {websiteData.projects.link[project] && (
              <a
                className={styles['mobProject-button-component']}
                onMouseOver={() => console.log('mouseover')}
                onFocus={() => console.log()}
                target="_blank"
                href={websiteData.projects.link[project]}
                rel="noreferrer"
              >
                <i className="fas fa-pager"></i>
              </a>
            )}
            {websiteData.projects.dedicate[project] && (
              <a
                className={styles['mobProject-button-component']}
                href={websiteData.projects.dedicate[project]}
              >
                <i className="far fa-newspaper"></i>
              </a>
            )}
            {websiteData.projects.github[project] && (
              <a
                className={styles['mobProject-button-component']}
                target="_blank"
                href={websiteData.projects.github[project]}
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
        <div className={styles['mobProject-date']}>
          {websiteData.projects.date[project]}
        </div>
      </div>
    )
  }

  render() {
    const { styles } = this.props
    return (
      <div>
        <Head>
          <title>Projects</title>
        </Head>
        <NavBar />
        <div id={styles.mobProject}>
          <div id={styles.mobAllProjects}>
            {websiteData.bestProject && (
              <div className={styles.mobProjectBox}>
                <div className={styles.mobProjectBoxHeader}>Best Project</div>
                <div className={styles.mobProjectBoxInformation}>
                  {websiteData.bestProject.map((project, key) => (
                    <div key={key}> {this.project(project)}</div>
                  ))}
                </div>
              </div>
            )}

            {websiteData.currentProject && (
              <div className={styles.mobProjectBox}>
                <div className={styles.mobProjectBoxHeader}>
                  Current Projects
                </div>
                {websiteData.currentProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.pastOtherProject && (
              <div className={styles.mobProjectBox}>
                <div className={styles.mobProjectBoxHeader}>Past Projects</div>
                {websiteData.pastOtherProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.pastPersonalProject && (
              <div className={styles.mobProjectBox}>
                <div className={styles.mobProjectBoxHeader}>
                  Past Personal Projects
                </div>
                {websiteData.pastPersonalProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsMobPage

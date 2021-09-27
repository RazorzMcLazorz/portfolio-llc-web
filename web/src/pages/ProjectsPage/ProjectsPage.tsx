import React, { Component } from 'react'
import { Head } from '@redwoodjs/web'
import NavBar from 'src/components/navbar'
import StylesType from 'src/StylesType'
import websiteData from 'src/values/websiteData'

interface IProps {
  styles: StylesType
}

class ProjectsPage extends Component<IProps> {
  project(project) {
    const { styles } = this.props
    return (
      <div className={styles.project}>
        <div className={styles['project-title']}>
          {websiteData.projects.title[project]}
        </div>
        <div className={styles['project-details']}>
          <div className={styles['project-description']}>
            {websiteData.projects.summary[project]}
          </div>
          <div className={styles['project-buttons']}>
            {websiteData.projects.link[project] && (
              <a
                className={styles['project-button-component']}
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
                className={styles['project-button-component']}
                href={websiteData.projects.dedicate[project]}
              >
                <i className="far fa-newspaper"></i>
              </a>
            )}
            {websiteData.projects.github[project] && (
              <a
                className={styles['project-button-component']}
                target="_blank"
                href={websiteData.projects.github[project]}
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
        <div className={styles['project-date']}>
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
        <div id={styles.projectWall}>
          <div id={styles.allProjects}>
            {websiteData.bestProject && (
              <div className={styles.projectBox}>
                <div
                  id={styles.bestProject}
                  className={styles.projectBoxHeader}
                >
                  Best Project
                </div>
                {websiteData.bestProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.currentProject && (
              <div className={styles.projectBox}>
                <div
                  id={styles.currentProject}
                  className={styles.projectBoxHeader}
                >
                  Current Projects
                </div>
                {websiteData.currentProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.pastOtherProject && (
              <div className={styles.projectBox}>
                <div
                  id={styles.pastProject}
                  className={styles.projectBoxHeader}
                >
                  Past Projects
                </div>
                {websiteData.pastOtherProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.pastPersonalProject && (
              <div className={styles.projectBox}>
                <div className={styles.projectBoxHeader}>
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

export default ProjectsPage

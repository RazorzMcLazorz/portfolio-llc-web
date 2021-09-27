import React, { Component } from 'react'
import NavBar from 'src/components/navbar'
import StylesType from 'src/StylesType'
import websiteData from 'src/values/websiteData'

interface IProps {
  styles: StylesType
}

class ProjectsMobPage extends Component<IProps> {
  project(project) {
    return (
      <div className="mobProject-box">
        <div className="mobProject-title">
          {websiteData.projects.title[project]}
        </div>
        <div className="mobProject-details">
          <div className="mobProject-description">
            {websiteData.projects.summary[project]}
          </div>
          <div className="mobProject-buttons">
            {websiteData.projects.link[project] && (
              <a
                className="mobProject-button-component"
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
                className="mobProject-button-component"
                href={websiteData.projects.dedicate[project]}
              >
                <i className="far fa-newspaper"></i>
              </a>
            )}
            {websiteData.projects.github[project] && (
              <a
                className="mobProject-button-component"
                target="_blank"
                href={websiteData.projects.github[project]}
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
        <div className="mobProject-date">
          {websiteData.projects.date[project]}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="mobProject">
          <div id="mobAllProjects">
            {websiteData.bestProject && (
              <div className="mobProjectBox">
                <div className="mobProjectBoxHeader">Best Project</div>
                <div className="mobProjectBoxInformation">
                  {websiteData.bestProject.map((project, key) => (
                    <div key={key}> {this.project(project)}</div>
                  ))}
                </div>
              </div>
            )}

            {websiteData.currentProject && (
              <div className="mobProjectBox">
                <div className="mobProjectBoxHeader">Current Projects</div>
                {websiteData.currentProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.pastOtherProject && (
              <div className="mobProjectBox">
                <div className="mobProjectBoxHeader">Past Projects</div>
                {websiteData.pastOtherProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.pastPersonalProject && (
              <div className="mobProjectBox">
                <div className="mobProjectBoxHeader">
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

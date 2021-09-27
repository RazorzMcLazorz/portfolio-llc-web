import React, { Component } from 'react'
import NavBar from 'src/components/navbar'
import StylesType from 'src/StylesType'
import websiteData from 'src/values/websiteData'

interface IProps {
  styles: StylesType
}

class ProjectsPage extends Component<IProps> {
  project(project) {
    return (
      <div className="project">
        <div className="project-title">
          {websiteData.projects.title[project]}
        </div>
        <div className="project-details">
          <div className="project-description">
            {websiteData.projects.summary[project]}
          </div>
          <div className="project-buttons">
            {websiteData.projects.link[project] && (
              <a
                className="project-button-component"
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
                className="project-button-component"
                href={websiteData.projects.dedicate[project]}
              >
                <i className="far fa-newspaper"></i>
              </a>
            )}
            {websiteData.projects.github[project] && (
              <a
                className="project-button-component"
                target="_blank"
                href={websiteData.projects.github[project]}
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
        <div className="project-date">{websiteData.projects.date[project]}</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="projectWall">
          <div id="allProjects">
            {websiteData.bestProject && (
              <div className="projectBox">
                <div id="bestProject" className="projectBoxHeader">
                  Best Project
                </div>
                {websiteData.bestProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.currentProject && (
              <div className="projectBox">
                <div id="currentProject" className="projectBoxHeader">
                  Current Projects
                </div>
                {websiteData.currentProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.pastOtherProject && (
              <div className="projectBox">
                <div id="pastProject" className="projectBoxHeader">
                  Past Projects
                </div>
                {websiteData.pastOtherProject.map((project, key) => (
                  <div key={key}> {this.project(project)}</div>
                ))}
              </div>
            )}

            {websiteData.pastPersonalProject && (
              <div className="projectBox">
                <div className="projectBoxHeader">Past Personal Projects</div>
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

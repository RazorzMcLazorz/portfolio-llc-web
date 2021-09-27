import React from 'react'
import { Router, Route } from '@redwoodjs/router'
import StylesType from 'src/StylesType'

import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ContactPage from './pages/ContactPage/ContactPage'

import HomeMobPage from './pages/HomeMobPage/HomeMobPage'
import ProjectsMobPage from './pages/ProjectsMobPage/ProjectsMobPage'
import SkillsMobPage from './pages/SkillsMobPage/SkillsMobPage'
import ContactMobPage from './pages/ContactMobPage/ContactMobPage'

const Routes = ({ styles }: { styles: StylesType }) => {
  const isMobile = screen.width < 600
  return (
    <Router>
      <Route path="/" page={() => (isMobile ? <HomeMobPage styles={styles} /> : <HomePage styles={styles} />)} name="homePage" />
      <Route path="/projects" page={() => (isMobile ? <ProjectsMobPage styles={styles} /> : <ProjectsPage styles={styles} />)} name="projectsPage" />
      <Route path="/skills" page={() => (isMobile ? <SkillsMobPage styles={styles} /> : <SkillsPage styles={styles} />)} name="skillsPage" />
      <Route path="/contact" page={() => (isMobile ? <ContactMobPage styles={styles} /> : <ContactPage styles={styles} />)} name="contactPage" />
      <Route path="/login" page={() => <LoginPage styles={styles} />} name="LoginPage" />
      <Route notfound page={() => <HomePage styles={styles} />} />
    </Router>
  )
}

export default Routes

import React from 'react'
import { Router, Route } from '@redwoodjs/router'
import StylesType from 'src/StylesType'

import HomePage from './pages/HomePage/HomePage'
import HomeMobPage from './pages/HomeMobPage/HomeMobPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ProjectsMobPage from './pages/ProjectsMobPage/ProjectsMobPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import SkillsMobPage from './pages/SkillsMobPage/SkillsMobPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ContactMobPage from './pages/ContactMobPage/ContactMobPage'
import FatalErrorPage from './pages/FatalErrorPage/FatalErrorPage'

const Routes = ({ styles }: { styles: StylesType }) => {
  const isMobile = screen.width < 600
  return (
    <Router>
      <Route path="/" page={() => (isMobile ? <HomeMobPage styles={styles} /> : <HomePage styles={styles} />)} name="homePage" />
      <Route path="/projects" page={() => (isMobile ? <ProjectsMobPage styles={styles} /> : <ProjectsPage styles={styles} />)} name="projectsPage" />
      <Route path="/skills" page={() => (isMobile ? <SkillsMobPage styles={styles} /> : <SkillsPage styles={styles} />)} name="skillsPage" />
      <Route path="/contact" page={() => (isMobile ? <ContactMobPage styles={styles} /> : <ContactPage styles={styles} />)} name="contactPage" />
      <Route path="/login" page={() => <LoginPage styles={styles} />} name="LoginPage" />
      <Route notfound page={FatalErrorPage} />
    </Router>
  )
}

export default Routes

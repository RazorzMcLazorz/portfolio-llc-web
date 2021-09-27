// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import React from 'react'
import { Router, Route } from '@redwoodjs/router'
import StylesType from 'src/StylesType'

import HomePage from './pages/HomePage/HomePage'
// import Projects from './pages/projects'
// import Skills from './pages/skills'
// import Login from './pages/login'
// import Contact from './pages/contact'

// import HomeMob from './pages/homeMob'
// import MobProjects from './pages/mobProject'
// import SkillsMob from './pages/skillsMob'
// import ContactMob from './pages/contactMob'

const Routes = ({ styles }: { styles: StylesType }) => {
  return (
    <Router>
      {screen.width < 600 ? (
        <>
          {/* <Route path="/" component={HomeMob} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={ContactMob} />
          <Route path="/projects" component={MobProjects} />
          <Route path="/skills" component={SkillsMob} /> */}
        </>
      ) : (
        <>
          <Route path="/" page={() => <HomePage styles={styles} />} name="home" />
          {/* <Route exact path='/projects' component={Projects} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/contact' component={Contact} /> */}
        </>
      )}
      <Route notfound page={() => <HomePage styles={styles} />} />
    </Router>
  )
}

export default Routes

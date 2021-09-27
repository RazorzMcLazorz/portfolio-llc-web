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
import HomePage from './pages/HomePage/HomePage'

const Routes = ({ styles }: { styles: any }) => {
  return (
    <Router>
      <Route path="/" page={() => <HomePage styles={styles} />} name="home" />
      <Route notfound page={() => <HomePage styles={styles} />} />
    </Router>
  )
}

export default Routes

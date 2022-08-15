import * as React from 'react'
import { Link } from 'gatsby'

import './index.module.css'
import Header from "./Header"
import Footer from './Footer'
import AboutMe from './aboutMe/AboutMe'
import Skills from './skills/Skills'

const Main = ({ pageTitle, children }) => {
  return (
    <div className="main">
      <title>{pageTitle}</title>
      <Header />
      <main>
        {children}
        <AboutMe />
        <Skills />
        
      </main>
      <Footer/>
    </div>
  )
}

export default Main
import * as React from 'react'
import { Link } from 'gatsby'

import './index.module.css'
import Header from "./Header"
import Footer from './Footer'

const Main = ({ pageTitle, children }) => {
  return (
    <div className="main">
      <title>{pageTitle}</title>
      <Header />
      <main>
        {children}
        bonjour les pros
      </main>
      <Footer/>
    </div>
  )
}

export default Main
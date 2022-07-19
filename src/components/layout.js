import * as React from 'react'
import { Link } from 'gatsby'
import nightwind from "nightwind/helper"
import './index.module.css'


const Lay = ({ pageTitle, children }) => {
  return (
    <div className="">
      <title>{pageTitle}</title>
      <div className='flex justify-between'>
        <span>Logo</span>
        <nav className='w-96'>
          <ul className='flex justify-around'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <button onClick={() => nightwind.toggle()}>Theme</button>
          </ul>
        </nav>
      </div>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Lay
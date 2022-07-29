import React from 'react'
import { Link } from 'gatsby'
import nightwind from "nightwind/helper"


function Header() {
  return (
    <div>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
        <div className='flex justify-around w-full border-2 border-gray-900 h-12'>
            <div className='w-12 border border-gray-400'>Logo</div>
            <nav className='w-1/2 border border-gray-900'>
              <ul className='flex justify-around w-full dark:bg-red-900 border border-gray-900'>
                  <li className='border-y-2 border-orange-600'><Link to="/">Home</Link></li>
                  <li><Link to="/about">Services</Link></li>
                  <li><Link to="/about">Portfolio</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <button onClick={() => nightwind.toggle()}>Theme</button>
              </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
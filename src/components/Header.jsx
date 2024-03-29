import React,{useState} from 'react'
import { Link } from 'gatsby'
import nightwind from "nightwind/helper"


function Header() {
  const [soon, setSoon] = useState(false);

  const colorTheme = () =>{
    nightwind.toggle();
    setSoon(!soon);
  }

  return (
    <div>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
        <div className=' bg-white dark:bg-slate-800 flex justify-around w-full '>
            <div className=' w-16 -translate-x-32 md: border  pt-5'>Logo</div>
            <nav className='w-96 pt-5 absolute hidden h-screen text-center border border-gray-900 md:w-96 md:pt-0 md:relative md:flex md:h-14 lg:w-1/3'>
              <ul className='w-full block md:flex items-center  h-14 text-slate-500 justify-around  '>
                  <li className="px-5 hover:bg-red-700 hover:px-10 transition ease-linear select-all duration-2000 "><Link to="/">Home</Link></li>
                  <li className=''><Link to="/about">Services</Link></li>
                  <li><Link to="/about">Portfolio</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <button onClick={()=>colorTheme()}>
                    {soon ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                          :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>       
                    }

                  </button>
              </ul>
            </nav>
            <div className='toogle sm:flex pt-5 right-16 w-10 h-screen    absolute z-20  md:hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10  mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
        </div>
    </div>
  )
}

export default Header
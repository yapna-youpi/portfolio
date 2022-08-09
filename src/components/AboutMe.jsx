import React from 'react'

function AboutMe() {
  return (
    <div className='bg-slate-800 dark:bg-slate-50 pt-16 text-white dark:text-slate-500'>
        <h2 className='text-center text-3xl'>About Me</h2>
        <div className="about-content block  md:flex md:justify-around ">
            <div className="about-left "></div>
            <div className="about-right">

            </div>
        </div>
        <h2 className='w-44  mx-auto text-center text-3xl font-semibold px-3 py-5 border-4 border-white-800  '>Hi There</h2>
        <i className='fleche mt-0 m-auto'></i>
    </div>
  )
}

export default AboutMe;
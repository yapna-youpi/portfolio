import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


function AboutMe() {
  return (
    <div className='bg-slate-800 dark:bg-slate-50 pt-16 text-white dark:text-slate-500'>
        <h2 className='text-center text-3xl'>About Me</h2>
        <div className="about-content block  md:flex md:justify-around ">
            <div className="about-left w-1/2 pt-20 text-center">
                <StaticImage 
                    
                    alt="me in picture"
                    src="../images/me.png"
                />
            </div>
            <div className="about-right w-1/2">
                <h2 className='w-44 mt-32 text-center text-3xl font-semibold px-3 py-5 border-4 border-white-800'>Hi There</h2>
                <i className='fleche ml-12'></i>
                <br/>
                <p className='w-10/12 pt-2 fot-parag'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Qui optio expedita consectetur illum sequi facere? Odit ut, iste eos iure reiciendis sit tempore dicta, 
                    error fuga saepe voluptatem ipsum soluta numquam, sint consequuntur! Facilis, facere?
                </p>

                <div className="about-contact block md:flex mt-7 font-semibold text-lg dark:text-slate-700">
                    <div className="about-contact1 w-72">
                        <div className="about-blc1">
                            <h4 className='title-A'>Name:</h4>
                            <h5>Pierre Stallone Guifo</h5>
                        </div>
                        <div className="about-blc2 mt-5">
                            <h4 className='title-A'>Phone:</h4>
                            <h5>+237 678-71-96-50</h5>
                        </div>
                    </div>

                    <div className="about-contact2 w-70">
                        <div className="about-blc1">
                            <h4 className='title-A'>Email:</h4>
                            <h5>guifo@ipercash.fr</h5>
                        </div>
                        <div className="about-blc2 mt-5">
                            <h4 className='title-A'>Facebook:</h4>
                            <h5>+237 678-71-96-50</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutMe;
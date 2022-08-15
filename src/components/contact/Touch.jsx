import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineAddLocationAlt } from 'react-icons/md'
import { RiMailSendLine } from 'react-icons/ri'
import { BiMessageRoundedDetail } from 'react-icons/bi'

function Touch() {
  return (
    <div className='text-white pt-32 dark:text-sky-800'>
        <h2 className='w-64  mx-auto text-center text-3xl font-semibold px-7 py-8 border-4 border-white-800 text-white dark:text-slate-50 dark:bg-slate-800 '>GET In Touch</h2>
        <i className='fleche mt-0 ml-96 translate-x-56'></i>
        <div className="fot-adresse block lg:flex justify-center  mt-16">
            <div className="fot-adresse-c">
                <div className="fot-add">
                    <a className='inline-flex' href="#"><i className='fot-ico'><MdOutlineAddLocationAlt /></i></a>
                    <h4 className='title-4' >address</h4>
                    <p className='fot-parag'>
                        yaounde-omnisport<br/>
                        1ère Rue Fouda
                    </p>
                </div>
                <div className="fot-add">
                    <a className='inline-flex' href="#"><i className='fot-ico'><FiPhoneCall /></i></a>
                    <h4 className='title-4'>Phone</h4>
                    <p className='fot-parag'>
                        +237 678719650<br/>
                        1ère Rue Fouda
                    </p>
                </div>
            </div>
            <div className="fot-adresse-c">
                <div className="fot-add">
                    <a className='inline-flex' href="#"><i className='fot-ico'>< RiMailSendLine /></i></a>
                    <h4 className='title-4'>Email</h4>
                    <p className='fot-parag'>
                        yapnayoupi@gmail.com<br/>
                        Guifo@ipercash.fr
                    </p>
                </div>
                <div className="fot-add">
                    <a className='inline-flex' href='https://www.linkedin.com/in/pierre-stallone-guifo-3a9478226/'>
                        <i className='fot-ico'>< BiMessageRoundedDetail/></i>
                    </a>
                    <h4 className='title-4'>Linkedin Chat</h4>
                    <p className='fot-parag'>
                        yaounde-omnisport<br/>
                        1ère Rue Fouda
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Touch
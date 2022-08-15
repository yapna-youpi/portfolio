import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa' 
import Touch from './contact/Touch'
// import {FaFacebookF} from 'react-icon/fa'
// import { FaBeer } from 'react-icons/';
const Icone = ()=>{

}

function Footer() {

    const ShowIcone = (ico)=>{
      switch (true) {
          case ico === "fa": return < FaFacebookF  />    
              break;
          case ico === "tw": return  < FaTwitter  />    
              break;
          case ico === "in": return  < FaInstagram  />
              break;
          case ico === "li": return  < FaLinkedin  />
              break;
          default:
              break;
      }
  }



  return (
    <div>
        <div className='w-full bg-slate-800 dark:bg-slate-50 dark:text-black   style="background-image: url(../image/bg-color.png)'>
          <div className="fot-1 py-24">
            <Touch />
          </div>
          <div className='flex text-white dark:text-sky-800'>
              <div className="logoIcone">

              </div>
              <div className="form">
                <h2>Notifier Moi Par Message</h2>
                <form>
                  <div className="form-groupe">
                    <div className="form-group">
                      <label htmlFor="name">Name*</label>
                      <input type="text" id="Name" placeholder='Name' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Email">Email*</label>
                      <input type="email" name="email" id="email" />
                    </div>
                  </div>
                  <div className="form-groupe">
                    <label htmlFor="Subject">Subject*</label>
                    <input type="text" id="subject" placeholder='subject' /> 
                  </div>
                  <div className="form-groupe">
                    <ShowIcone />
                  </div>
                </form>
              </div>
          </div>
          <div className='bg-slate-50  dark:bg-slate-800 dark:text-white py-3'>
            <p className='w-80 ml-5  text-xs md:text-base md:ml-24'>© 2022 pierre stallone, All Rights Reserved <showIcone/></p>
          </div>
        </div>
    </div>
  )
}

export default Footer
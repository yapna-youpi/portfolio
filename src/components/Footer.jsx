import React from 'react'
// import {FaFacebookF} from 'react-icon/fa'
// import { FaBeer } from 'react-icons/';
const Icone = ()=>{

}

function Footer() {
  return (
    <div>
        <div className='w-full bg-slate-800 dark:bg-slate-50 dark:text-black   style="background-image: url(../image/bg-color.png)'>
          <div className='flex bg-hero-pattern'>
              <div className="logoIcone">
                {/* <FaBeer/> */}
              </div>
          </div>
          <div className='bg-slate-50  dark:bg-slate-800 dark:text-white py-3'>
            <p className='w-80 ml-5  text-xs md:text-base md:ml-24'>© 2022 pierre stallone, All Rights Reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer
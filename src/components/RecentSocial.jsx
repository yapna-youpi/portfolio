import React,{useEffect} from 'react';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa' 
// import './recent-social.css';

function RecentSocial({ico,title,number}) {

    const ShowIcone = ()=>{
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
    <div className='recent-social d-flex justify-content-between align-items-center px-2 mt-3'>
        <div className="recent-left">
        <i><ShowIcone /></i><span className='px-2'>{title}</span>
        </div>
        <div className="recent-right">
            <span>{number}K</span><span className='px-2'>Followers</span>
        </div>
    </div>
  )
}

export default RecentSocial
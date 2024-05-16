import React from 'react';
import Logo from "/logoLetters.png";
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='flex justify-between items-center absolute bottom-100 w-full border-solid bg-zinc-900 mt-10'>
      <img src={Logo} alt="" className='size-1/4 ml-20 p-2' style={{ width: '620px', height: 'auto' }}/>
      <div className='flex justify-center items-center mr-20 flex-col'>
          <p className='font-sancreek text-white text-center mt-5 text-2xl'>Contacto: 4432324326</p>
          <ul className='flex justify-between gap-5 mt-5 mb-5'>
            <li className='bg-white w-16 h-16 rounded-full'>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} size="4x" style={{ color: "#000000" }} />
              </a>
            </li>
            <li className='bg-white w-16 h-16 rounded-full'>
              <a href="https://www.facebook.com/profile.php?id=100054510457204">
                <FontAwesomeIcon icon={faFacebook} size="4x" style={{ color: "#000000" }} />
              </a>
            </li>
            <li className='bg-white w-16 h-16 rounded-full'>
              <a href="https://www.tiktok.com/">
                <FontAwesomeIcon icon={faTiktok} size="4x" style={{ color: "#000000" }} />
              </a>
            </li>
           
          </ul>
      </div>
    </div>
  )
}

export default Footer;

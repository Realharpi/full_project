import React from 'react';
import './Footer.scss';

// https://react-icons.github.io/react-icons/icons?name=fa
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => (
  <div className="footer">
    <h2>Harpinder Singh</h2>

    <div className='tags'>
      <p>Web Developer</p>
      <p>3D Artist</p>
    </div>

    <div className='social'>
      <BsTwitter />
      <FaFacebookF />
      <BsInstagram />
      <FaPinterestP />
      <FaLinkedinIn />
    </div>

    <div className='terms'>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
    </div>

    <div className='copyright_foot'>
      <p>Copyright © 2022 Harpinder, Ltd. All rights reserved.</p>
    </div>
    
  </div>

);

export default Footer;
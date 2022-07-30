import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.scss';

// React Icons. https://react-icons.github.io/react-icons/
import { HiMenuAlt4, HiX } from 'react-icons/hi';

// We are using Framer motion. We installed it earlier. https://www.framer.com/motion/ 
import { motion } from 'framer-motion';



const Navbar = () => {
  const [toggle, setToggle] = useState(false);            // We will use it in the mobile section below.

  return (
    <nav className="app__navbar">
  

      {/* Add Logo. "images" will refer to index.js in constants and logo will refer to images.js which is connected to index.js */}
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />    
      </div>


      {/* Unordered list will loop through all the nav items and create a link and display them as a list. */}
      <ul className="app__navbar-links">

        {/* Here we have an array. We applied map funciton on that array. "item" is an each item in the array like "home". */}
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>          {/* For each item, a list will be created and it will contain a link "a" tag. */}
            <a href={`#${item}`}>{item}</a>           {/* In this link, link is item itself and it's name is also the item itself.*/}
          </li>
        ))}
      </ul>


      {/* For mobile */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {/* If the toggle is true, the following will happen. */}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >

          {/* When we click on the close icon, HiX is providing the icon. */}
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

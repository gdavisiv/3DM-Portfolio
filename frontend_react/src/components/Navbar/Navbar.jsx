import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* This allows us to call all the items below from an array */}
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      
      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {/* IF toggle is true we want to render our mobile navigation Bar */}
          {
            toggle && (
              //Used from framer.com/developers
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
              <HiX onClick={() => setToggle(false)} />
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={{item}}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
              </motion.div>
            )}
      </div>
    </nav>
  );
};

export default Navbar;
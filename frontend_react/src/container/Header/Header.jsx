import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './Header.scss';

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1] }}
        transition={{ duration: 1.25 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, and welcome to</p>
              <h1 className="head-text">3DMations</h1>
            </div>
          </div>

          <div className="tag-cmp">

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
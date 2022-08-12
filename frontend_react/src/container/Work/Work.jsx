import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleWorkFilter = (item) => {

  }

  return (
    <>
      <h2 className="head-text">Examples of
      <span> projects completed</span>
      <br />
      for
      <span> various clientelle.</span>
    </h2>
    <div className="app__work-filter">
      {['UI/UX', 'Web App', 'Mobile App', 'CyberSecurity'].map((item, index) => (
      <div
        key={index}
        onClick={() => handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          {item}
      </div>
      ))}
    </div>

    <motion.div>
      
    </motion.div>
    </>
  );
};

export default Work;
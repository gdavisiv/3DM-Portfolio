import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  return (
    <>
      <h2 className="head-text">Examples of
      <span> projects completed</span>
      <br />
      for
      <span> various clientelle.</span>
    </h2>
    <div className="app__work-filter">
      {['UI/UX', 'Web App', 'Mobile App', 'CyberSecurity']}
    </div>
    </>
  );
};

export default Work;
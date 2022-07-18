import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  { title: 'Web Development', description: 'I build website with my full stack experience', imgUrl: '' }
];

const About = () => {
  return (
    <>
    <h2 className="head-text">Simplicity
      <span>is about subtracting the obvious</span>
      <br />
      and
      <span>adding the meaningful. - John Maeda</span>
    </h2>

      <div className="app__profiles">

      </div>

    </>
  );
};

export default About;
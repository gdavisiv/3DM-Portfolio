import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Services.scss';

const Services = () => {
  const [experiences, setExperience] = useState([]);
  const [services, setServices] = useState([]);


  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const servicesQuery = '*[_type == "services"]';

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      })

      client.fetch(servicesQuery)
      .then((data) => {
        setServices(data);
      })

  }, [])

  return (
    <>
      <h2 className="head-text">Services we provide our Clientelle</h2>

      <div className="app__services-container">
        <motion.div className="app__services-list">
          {services.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__services-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__services-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__services-exp-item"
              key={experience.year}
            >
              <div className="app__services-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__services-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__services-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="services-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
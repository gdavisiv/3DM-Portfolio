import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
//import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://twitter.com/gdavisiv"><BsTwitter /></a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/gdavisiv/"><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://github.com/gdavisiv"><BsGithub /></a>
        </div>
    </div>
  )
}

export default SocialMedia;
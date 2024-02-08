//Library of all Icons that might be needed:
//      https://react-icons.github.io/react-icons/search/#q=upwork
//Rember to use the specific library.
import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiUpwork } from "react-icons/si";


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.upwork.com/agencies/1613007447754076160/"><SiUpwork /></a>
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
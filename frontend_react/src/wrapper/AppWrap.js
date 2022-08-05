import React from 'react';
import { NavigatonDots, SocialMedia } from '../components'

//AppWrap will take in the following Compoent, idName, and className, and will return
//the function HOC
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={'app__container ${classNames}'}>
      <SocialMedia />

      <div className="app__wrapper app__flex">
        <Component />
      </div>
    </div>
  )
}

export default AppWrap
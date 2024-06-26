import React from 'react';
import { LogoHeader } from '../../../assets/icons';
import Sphere from "../../../assets/images/sphere.webp"
import ParticleHeader from '../../../components/Particles/ParticlesHeader';

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        {/* <ParticleHeader/> */}
        <div className="header__container">
          <div className="header__left">
            <h1>Digital Soft raqamli kelajak sari qadam.</h1>
            <h2>
              DigitalSoft, dasturiy ta'minot ishlab chiqish kompaniyasi, mijozlarning biznes muammolari, ehtiyojlari, og'riqli nuqtalariga e'tibor qaratish va biznes maqsadlariga yo'naltirilgan dasturiy echimlarni taqdim etish orqali biznesni raqamlashtirishga yordam beradi.
            </h2>
            <a href="/" target={"_parent"}>Biz bilan bog’laning</a>
          </div>
          <div className="header__right">
            <div className="sphere__header">
              <img src={Sphere} alt="" />
              {/* <div className="circle"></div>
              <svg className='flame__svg'>
                <filter id='wavy'>
                  <feTurbulence x="0" y="0"  baseFrequency="0.009" numOctaves="5" seed="2">
                    <animate 
                      attributeName='baseFrequency' 
                      dur="60s" 
                      values='0.02;0.005;0.02'
                      repeatCount="indefinite"  
                    />
                  </feTurbulence>
                  <feDisplacementMap in='SourceGraphic' scale="30"/>
                </filter>
              </svg> */}
            </div>
            <LogoHeader/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;
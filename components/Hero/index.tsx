import React from 'react';
import Image from 'next/image';
import './index.css';
import VerticalLoop from '../LoopingMessage'

const Hero: React.FC = () => {
    const messages = ["\"Crafted with precision, infused with passion.\"", "\"Ingredients chosen with care, meals made with pride.\"", "\"Meticulous preparation, a taste of our dedication.\""];
  return (
    <div className='hero'>
        <VerticalLoop messages={messages} />
        <div className="hero-image-container">
          {/* <Image
            src={heroPic}
            alt="Picture of Masa"
            fill
            /> */}
        </div>
        <div className="hero-video">
          <video autoPlay loop muted>
              <source src='./hero-video.mp4' type='video/mp4' />
            </video>
        </div>
    </div>
  )
}

export default Hero
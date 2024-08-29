import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './hero.css'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = ({ scrollToProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1 className={`hero-animation-enter ${animate && 'hero-title'}`}>Mystic Ice Cream</HeroH1>
          <HeroP className={`hero-animation-enter ${animate && 'hero-description'}`}>
            French artisan ice cream, crafted from the finest ingredients.
          </HeroP>
          <HeroBtn className={`hero-animation-enter ${animate && 'hero-button'}`} onClick={scrollToProducts}>
            View Menu
          </HeroBtn>
          <br />
          <HeroBtn className={`hero-animation-enter ${animate && 'hero-button'}`} onClick={() => window.location.href = 'https://wolt.com/en/isr/tel-aviv/restaurant/mystic'}>
            Order Now
          </HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

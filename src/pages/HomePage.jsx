import React, { useEffect } from 'react'
import Typed from 'typed.js'
import { NavLink } from 'react-router-dom'
import AnimateButton from '../components/AnimateButton'
import HomeBackground from '../assets/images/home-background.jpg'

const HomePage = () => {
  const el = React.useRef(null);
  const BackgroundImage = {
    backgroundImage: `url(${HomeBackground})`,
  };
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Quality Assurance", "Software Tester"],
      typeSpeed: 100,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-no-repeat bg-cover bg-[center_30px]" style={BackgroundImage}>        
      <div className="flex flex-col justify-center items-center">        

        <div data-aos="fade-up" className="text-center p-3 mb-5 lg:mb-16 text-4xl md:text-6xl lg:text-8xl font-semibold overflow-hidden">
          <p className='text-white text-3xl md:text-4xl lg:text-6xl mb-2 lg:mb-4'>Hey, I&apos;m Inggrit.</p>          
          <span ref={el}/>
        </div>          

        <NavLink to="/about" data-aos="zoom-in" data-aos-delay="1000" className="btn-wrapper flex justify-center items-center">
          <AnimateButton/>
        </NavLink>        

      </div>
    </div>        
  )
}

export default HomePage

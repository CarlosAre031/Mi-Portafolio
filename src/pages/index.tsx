import React, { useEffect, useState } from 'react'
import Nav from'./../components/Nav';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skils';
import Projects from '@/components/Projects';
{/*import Testimonial from '@/components/Testimonial';*/}
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ThemeToggle from '@/components/ThemeToggle';

const HomePage = () => {

  const [nav, setnav] = useState (false);
  const openNav = () => setnav(true);
  const closeNav = () => setnav(false);
// You can also use <link> for styles

  useEffect(()=>{
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  },[])

  return ( 
  <div className="overflow-x-hidden">
    <div>
      <ThemeToggle/>
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav} />
      <Hero />
      <div className='relative z-[30]'>
        <About />
        <Services />
        <Skills />
        <Projects />
        <Blog />
        {/*<Testimonial />*/}
        <Footer />
      </div>
    </div>
  </div>
  );
};

export default HomePage
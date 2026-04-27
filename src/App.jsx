import './App.css'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Project from './components/sections/Project'
import Skill from './components/sections/Skill'
import BeyondTheScreen from './components/sections/BeyondTheScreen'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import BackToTopBtn from './components/ui/BackToTopBtn'
import { useState, useEffect } from 'react'

function App() {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    const handleMediaChange = (e) => {
      if (e.matches) {
        setIsMobileNavOpen(false);
      }
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);
    
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);
  
  useEffect(() => {
    if(!isMobileNavOpen){
      document.body.style.position = 'static';
    }else{
      document.body.style.position = 'fixed';
    }
  },[isMobileNavOpen])

  const mobileNavClickHandler = () => {
    setIsMobileNavOpen(prev => !prev);
  }

  const linkClickHandler = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        }
  }

  return (
    <>
      <Header isMobileNavOpen={isMobileNavOpen} mobileNavClickHandler={mobileNavClickHandler} setIsMobileNavOpen={setIsMobileNavOpen} linkClickHandler={linkClickHandler} />
      <Hero />
      <About />
      <Project />
      <Skill />
      <BeyondTheScreen />
      {/* <Contact /> */}
      <Footer linkClickHandler={linkClickHandler} />
      <BackToTopBtn />
    </>
  )
}

export default App

import './App.css'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skill from './components/sections/Skill'
import Project from './components/sections/Project'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
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

  return (
    <>
      <Header isMobileNavOpen={isMobileNavOpen} mobileNavClickHandler={mobileNavClickHandler} setIsMobileNavOpen={setIsMobileNavOpen}/>
      <Hero/>
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}

export default App

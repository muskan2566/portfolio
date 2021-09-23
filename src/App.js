import React from 'react'
import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Education from './components/Education';
import Skills from './components/skills';
import Contactme from './components/contactme';

const App = () => {
  return (
    <>
     <Navbar />
     <Aboutme />
     <Education/>
     <Skills/>
     <Contactme/>
    </>
  )
}


export default App

import React from 'react'
import Navbar from './subcomponent/Navbar';
import Aboutme from './subcomponent/Aboutme';
import Education from './subcomponent/Education'
import Skills from './subcomponent/Skills';
import Contactme from './subcomponent/Contactme';

export default function Home() {
    return (
        <>
              <Navbar />
              <Aboutme />
              <Education />
              <Skills />
              <Contactme />
        </>
    )
}

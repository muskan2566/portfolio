import React from 'react'
import Navbar from './subcomponent/navbar';
import Aboutme from './subcomponent/aboutme';
import Education from './subcomponent/Education'
import Skills from './subcomponent/skills';
import Contactme from './subcomponent/contactme';

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

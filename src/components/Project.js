import React from 'react'
import './css/project.css'
import P1 from './image/p1.png'
import { Link } from 'react-router-dom'

export default function Project() {
    return (
        <>
            <div className="project-Navbar ">
                <div>
                    <Link className="project-link" to="/">HOME</Link>
                    <Link className="project-link" to="/Project">PROJECTS</Link>
                </div>
            </div>
            <div class="project-title">
                <p className="projecth"><b>My Projects</b></p>
               

                <hr/>
                <div className="project-body" >
                    <div>
                        <img className="project-image" src={P1} alt="not found" />
                    </div>
                    <div className="project-details">
                        <p className="project-h">College Essential</p>
                        <p className="project-tech"><i>Technology (HTML,CSS,Javascript)</i></p>
                        <p className="project-info">This is a Website for MCA,BCA and DDMCA Students.
                            You can download Books, Syllabus(RGPV), Notes, Exam-papers from here.</p>
                          
                            <button className="P-button" onclick="https://vm-collagewebsite.netlify.app/">Git Hub</button>
                            <button className="P-button" onclick="https://vm-collagewebsite.netlify.app/">Live Demo</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

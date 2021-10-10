import React from 'react'
import './css/project.css'
import P1 from './image/p1.png'
import { Link } from 'react-router-dom'

export default function Project() {
    return (
        <>
            <div className="project-Navbar ">
                <div>
                    <Link className="project-link phone-link" to="/">HOME</Link>
                    <Link className="project-link phone-link" to="/Project">PROJECTS</Link>
                </div>
                <div className="phone-navbar">
                <Link to="/"><i className="fas fa-home fa-2x"></i></Link>
                </div>
            </div>
            <div className="project-title">
                <p className="projecth"><b>My Projects</b></p>
                <hr className="phone-hr" />

                <div className="project-body" >
                    <div className="phone-div">
                        <p className="phone-h"> College Essential</p>
                    </div>
                    <div>
                        <img className="project-image" src={P1} alt="not found" />
                    </div>
                    <div className="project-details">
                        <p className="project-h">College Essential</p>

                        <p className="project-tech"><i>Technology (HTML,CSS,Javascript)</i></p>
                        <p className="project-info">This is a Website for MCA,BCA and DDMCA Students.
                            You can download Books, Syllabus(RGPV), Notes, Exam-papers from here.</p>

                        <button className="P-button"><a href="https://github.com/muskan2566/Collage-Essentials/" target="_blank" rel="noreferrer" >Git Hub</a></button>
                        <button className="P-button"><a href="https://vm-collagewebsite.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a></button>

                    </div>
                </div>
            </div>
                </>
                )
}

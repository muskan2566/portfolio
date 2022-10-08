import React from 'react'
import './css/project.css'
import P2 from './image/p2.png'
import P1 from './image/p1.png'
import P3 from  './image/p3.png'
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
                        <p className="phone-h">CryptoDash</p>
                    </div>
                    <div>
                        <img className="project-image" src={P3} alt="not found" />
                    </div>
                    <div className="project-details ">
                        <p className="project-h">CryptoDash</p>

                        <p className="project-tech"><i>Technology (Reactjs,CSS)</i></p>
                        <p className="project-info"> CryptoDash is a web application that provides an interface to see all the current prices of Crypto coins.</p>

                        <button className="P-button"><a href="https://github.com/muskan2566/Crypto-Dash" target="_blank" rel="noreferrer" >Git Hub</a></button>
                        <button className="P-button"><a href="https://cryptodashb.netlify.app" target="_blank" rel="noreferrer">Live Demo</a></button>

                    </div>
                   
                   
                </div>


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


                <div className="project-body" >
                    <div className="phone-div">
                        <p className="phone-h"> ImageGallery</p>
                    </div>
                    <div>
                        <img className="project-image" src={P2} alt="not found" />
                    </div>
                    <div className="project-details">
                        <p className="project-h">ImageGallery</p>

                        <p className="project-tech"><i>Technology (MERN)</i></p>
                        <p className="project-info"> This is a web app where you can add your images in DataBase. Also perform CURD operations like you can add ,view , change images in database.</p>

                        <button className="P-button"><a href="https://github.com/muskan2566/ImageGalleryClint" target="_blank" rel="noreferrer" >Git Hub</a></button>
                        <button className="P-button"><a href="https://imagegalleryhub.netlify.app" target="_blank" rel="noreferrer">Live Demo</a></button>

                    </div>
                </div>
            </div>
                </>
                )
}

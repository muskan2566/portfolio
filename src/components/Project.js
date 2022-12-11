import React from 'react'
import './css/project.css'

import { Link } from 'react-router-dom'

import projectData from './projectData'

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

                {
                    projectData.map((e) => {
                        return (

                            <div className="project-body" >
                                <div className="phone-div">
                                    <p className="phone-h">{e.name}</p>
                                </div>
                                <div>
                                    <img className="project-image" src={e.image} alt="not found" />
                                </div>
                                <div className="project-details ">
                                    <p className="project-h">{e.name}</p>

                                    <p className="project-tech"><i>Technology{e.tech}</i></p>
                                    <p className="project-info"> {e.detail}</p>

                                    <button className="P-button"><a href={e.git} target="_blank" rel="noreferrer" >Git Hub</a></button>
                                    <button className="P-button"><a href={e.live} target="_blank" rel="noreferrer">Live Demo</a></button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

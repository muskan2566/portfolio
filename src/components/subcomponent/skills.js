import React from 'react'
import '../css/skills.css'
import { Link } from 'react-router-dom'

export default function skills() {
    return (
        <>
            <div id="skillslink">
                <div className="skillbody">
                    <h1 className="skillsh">Skills</h1>
                    <div className="wrapper">
                        <div className="shape-1"></div>
                        <div className="shape-2"></div>
                        <div className="container">
                            <div className="skills">
                                <div className="details">
                                    <span>HTML</span>
                                    <span>70%</span>
                                </div>
                                <div className="bar">
                                    <div id="html-bar"></div>
                                </div>
                            </div>
                            <div className="skills">
                                <div className="details">
                                    <span>CSS</span>
                                    <span>60%</span>
                                </div>
                                <div className="bar">
                                    <div id="css-bar"></div>
                                </div>
                            </div>
                            <div className="skills">
                                <div className="details">
                                    <span>Javascript</span>
                                    <span>40%</span>
                                </div>
                                <div className="bar">
                                    <div id="js-bar"></div>
                                </div>
                            </div>
                            <div className="skills">
                                <div className="details">
                                    <span>c++</span>
                                    <span>50%</span>
                                </div>
                                <div className="bar">
                                    <div id="jQuery-bar"></div>
                                </div>
                            </div>
                            <div className="skills">
                                <div className="details">
                                    <span>Java</span>
                                    <span>50%</span>
                                </div>
                                <div className="bar">
                                    <div id="java-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to="/project"><button className="projectbutton" type="button"><b><i>View My Projects</i></b></button></Link>

            </div>
        </>
    )
}

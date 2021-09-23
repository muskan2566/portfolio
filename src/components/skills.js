import React from 'react'
import './css/skills.css'

export default function skills() {
    return (
        <>
            <div id="skillslink">
                <div className="skillbody">
                    <h1 className="skillsh">Skills</h1>
                    <div class="wrapper">
                        <div class="shape-1"></div>
                        <div class="shape-2"></div>
                        <div class="container">
                            <div class="skills">
                                <div class="details">
                                    <span>HTML</span>
                                    <span>70%</span>
                                </div>
                                <div class="bar">
                                    <div id="html-bar"></div>
                                </div>
                            </div>
                            <div class="skills">
                                <div class="details">
                                    <span>CSS</span>
                                    <span>60%</span>
                                </div>
                                <div class="bar">
                                    <div id="css-bar"></div>
                                </div>
                            </div>
                            <div class="skills">
                                <div class="details">
                                    <span>Javascript</span>
                                    <span>40%</span>
                                </div>
                                <div class="bar">
                                    <div id="js-bar"></div>
                                </div>
                            </div>
                            <div class="skills">
                                <div class="details">
                                    <span>c++</span>
                                    <span>50%</span>
                                </div>
                                <div class="bar">
                                    <div id="jQuery-bar"></div>
                                </div>
                            </div>
                            <div class="skills">
                                <div class="details">
                                    <span>Java</span>
                                    <span>40%</span>
                                </div>
                                <div class="bar">
                                    <div id="java-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="projectbutton" type="button"><b><i>View My Projects</i></b></button>

            </div>
        </>
    )
}

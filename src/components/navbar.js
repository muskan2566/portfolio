import React from 'react'
import './css/navbar.css'
import Muskan from './muskan.jpeg'

export default function navbar() {
    
    return (
        <>
        <div className="body">
            <div className="navbar">
                <a href="https://vinayaksharma.netlify.app/">HOME</a>
                <a href="">PROJECTS</a>
            </div>
            <div className="div">
                <p className="name"> <b>Muskan <br></br> Kushwah</b> <p className="aim">Software Developer</p> 
                </p>
                <img className="img"src={Muskan}  />
              

                <ul className="list">
                    <a href="#aboutmelink" className=" navlink"><li className="li"><span  className="showonhover">About</span></li></a>
                    <a href="#educationlink" className=" navlink"><li className="li"><span className="showonhover">Education</span></li></a>
                    <a href="#skillslink" className="navlink"><li className="li"><span className="showonhover">Skills</span></li></a>
                    <a href="#contactmelink" className=" navlink"><li className="li"><span className="showonhover">Contact me</span></li></a>
                </ul>

            </div>
    
        </div>
        </>
    );
};

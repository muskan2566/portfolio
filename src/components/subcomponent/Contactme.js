import React from 'react'
import '../css/contactme.css';

export default function contactme() {
    return (
        <>
            <div id="contactmelink" className='contactbody'>
                <div>
                    <h1 className='contacth'>Contact Me</h1>
                    <div className="social-media">
                <a href="https://www.linkedin.com/in/muskan-kushwah-a44143204/" target="_blank"rel="noreferrer" ><i className="fab fa-2x fa-linkedin-in"></i></a>
                <a href="https://github.com/muskan2566" target="_blank" rel="noreferrer"><i className="fab fa-2x fa-github"></i></a>
                <a href="mailto:muskankushwah2566@gmail.com"><i className="fas  fa-2x fa-envelope"></i></a>
            </div>
                </div>
                <div>

                    <form action="https://formcarry.com/s/1rDlnuAGIr9" className="contactform" method="POST"  >

                        <label >Enter Your Name</label>
                        <label className="emaillabel" >Enter Your Email</label><br />
                        <input className="input hoverontext" type="text" id="name" name="firstName" placeholder="Name"></input>
                        <label className="emaillabel2">Enter Your Email</label>
                        <input className="input  hoverontext" type="email" id="email" required name="email" placeholder="Email"></input><br />
                        <label >Enter Your Message</label><br />
                        <input className="textmessage  hoverontext" id="message" type="textarea" name="anotherInput" placeholder="Message"></input>
                        <input type="hidden" name="_gotcha"/>
                        <button className="contactbutton hoverbutton" type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
            <a href="#home" className="down-arrow"><i className="fas fa-3x fa-chevron-up"></i></a>
            
        </>
    )
}

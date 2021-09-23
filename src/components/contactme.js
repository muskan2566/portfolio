import React from 'react'
import './css/contactme.css';

export default function contactme() {
    return (
        <>
            <div id="contactmelink" className='contactbody'>
                <div>
                    <h1 className='contacth'>Contact Me</h1>
                </div>
                <div>

                    <form action="https://formcarry.com/s/1rDlnuAGIr9" className="contactform" method="POST" accept-charset="UTF-8" >

                        <label for="name">Enter Your Name</label>
                        <label className="emaillabel" for="email">Enter Your Email</label><br />
                        <input className="input hoverontext" type="text" id="name" name="firstName" placeholder="Name"></input>
                        <input className="input  hoverontext" type="email" id="email" required name="email" placeholder="Email"></input><br />
                        <label for="message">Enter Your Message</label><br />
                        <input className="textmessage  hoverontext" id="message" type="textarea" name="anotherInput" placeholder="Message"></input>
                        <input type="hidden" name="_gotcha"/>
                        <button className="contactbutton" type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    )
}

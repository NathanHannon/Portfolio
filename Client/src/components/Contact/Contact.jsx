import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
    render() {
        return (
             <div className="contactPage">
                <header className="contactHeader">
                    <h1><u>Resumé & Contact Info</u></h1>
                </header>
                <p>
                    <a href="tel:519-878-6227" className="contactLink" alt="Call 519-878-6227">Give me a call!</a>
                    <a href="mailto:nathan@hannon.me" className="contactLink" alt="Send email to nathan@hannon.me">Send me an email!</a>
                </p>
                <div class="iframe-container">
                    <iframe seamless="seamless" frameborder="0" src={`https://storage.googleapis.com/nathan-hannon-portfolio/Nathan_Hannon_Resume.pdf`}/>
                </div>
             </div>
        );
    }
}
export default Contact;
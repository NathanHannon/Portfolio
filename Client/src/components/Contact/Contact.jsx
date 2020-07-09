import React, { Component } from "react";
import { Button, Container } from 'reactstrap';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
             <Container className="contactPage">
                <header className="contactHeader">
                    <h1><u>Resumé & Contact Info</u></h1>
                </header>
                <p>
                    <a href="tel:519-878-6227" className="contactLink" alt="Call 519-878-6227">Give me a call!</a>
                    <a href="mailto:nathan@hannon.me" className="contactLink" alt="Send email to nathan@hannon.me">Send me an email!</a>
                </p>
                <iframe width="100%" height="1150" frameborder="0" src={`https://storage.cloud.google.com/portfoliofiles/Nathan_Hannon_Resume.pdf`}/>
             </Container>
        );
    }
}
export default Contact;
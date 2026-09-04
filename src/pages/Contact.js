import React from 'react';
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { ReactComponent as Github } from "../components/github-mark.svg";
import { ReactComponent as Linkedin } from "../components/linkedin.svg";
import { ReactComponent as Resume } from "../components/resume-icon.svg";
import { ReactComponent as Envelope } from "../components/email.svg";
import "./stylesheets/contact.css"

const SERVICE_ID = "service_gy5b4o5";
const TEMPLATE_ID = "template_qn2mcp8";
const USER_ID = "rzanX2IBI6mflZTXt";

function Contact(){

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully'
            });
            e.target.reset();
        } catch (error) {
            console.error(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Oops, something went wrong',
                text: error.text,
            });
        }
    };


    return(
        <>
            <div className="section-title-frame">
                <span className="corner-bracket corner-tl"></span>
                <span className="corner-bracket corner-tr"></span>
                <span className="corner-bracket corner-bl"></span>
                <span className="corner-bracket corner-br"></span>
                <h2 className="section-title contact-title-gradient">Contact</h2>
            </div>
            <div className="section-underline"></div>
            <p className="section-subtitle">Let's connect!</p>

            <div className="contact-card">
                <span className="corner-bracket corner-tl"></span>
                <span className="corner-bracket corner-tr"></span>
                <span className="corner-bracket corner-bl"></span>
                <span className="corner-bracket corner-br"></span>

                <div className="grid-contact">
                    <Form className="custom-form" onSubmit={handleOnSubmit}>
                        <Form.Field
                            className="custom-form-field"
                            id='form-input-control-email'
                            control={Input}
                            label='Email'
                            name='from_email'
                            placeholder='Email…'
                            required
                            icon='mail'
                            iconPosition='left'
                        />
                        <Form.Field
                            className="custom-form-field"
                            id='form-input-control-last-name'
                            control={Input}
                            label='Name'
                            name='from_name'
                            placeholder='Name…'
                            required
                            icon='user circle'
                            iconPosition='left'
                        />
                        <Form.Field
                            className="custom-form-field"
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Message'
                            name='message'
                            placeholder='Message…'
                            required
                        />
                        <Button className="custom-button" type='submit'>
                            Submit
                        </Button>
                    </Form>
                </div>

                <div className="contact-info-strip">
                    <a className="contact-info-item" href="mailto:williamecastillo@gmail.com" title="Email">
                        <Envelope/>
                        <span>williamecastillo@gmail.com</span>
                    </a>
                    <a className="contact-info-item" href="https://github.com/WilliamEricCastillo?tab=repositories" title="Github" target="_blank" rel="noopener noreferrer">
                        <Github/>
                        <span>GitHub</span>
                    </a>
                    <a className="contact-info-item" href="https://www.linkedin.com/in/williamecastillo/" title="Linkedin" target="_blank" rel="noopener noreferrer">
                        <Linkedin/>
                        <span>LinkedIn</span>
                    </a>
                    <a className="contact-info-item" href="https://docs.google.com/document/d/13-kOm3dyOPNBZ3FI1ioMLuBrUgIsUcJt/edit?usp=sharing&ouid=108401301805898358230&rtpof=true&sd=true" title="View Resume" target="_blank" rel="noopener noreferrer">
                        <Resume/>
                        <span>Resume</span>
                    </a>
                </div>
            </div>

        </>
    );
}

export default Contact;
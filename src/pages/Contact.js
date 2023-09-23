import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
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
                    <Button className="custom-button" type='submit' color='green'>
                        Submit
                    </Button>
                </Form>
            </div>

        </>
    );
}

export default Contact;
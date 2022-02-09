import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        require('dotenv').config();
        this.state = {
            from_name: '',
            reply_to: '',
            message: ''
        }
        this.form = React.createRef();
        this.recaptchaRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    HandleSubmit(e) {
        e.preventDefault();

        if(this.state.from_name === '' ||
           this.state.reply_to === '' ||
           this.state.message === '') {
            let msg_container = document.getElementById('notif_msg');

            while(msg_container.firstChild) {
                msg_container.removeChild(msg_container.firstChild)
            }

            let msg_tag = document.createElement('p');
            let msg_content = document.createTextNode('Error, you need to fill in all the fields first');
            msg_tag.appendChild(msg_content);
            msg_tag.style.color = '#FF0000';
            msg_tag.style.textAlign = 'center';
            msg_tag.id = 'error_msg';

            msg_container.appendChild(msg_tag);

            if(msg_container.style.display === 'none') {
                msg_container.style.display = 'block';
                msg_container.style.margin = 'auto';
            }

            return;
        }
        else if(this.recaptchaRef.current.getValue() === '') {
            let msg_container = document.getElementById('notif_msg');

            while(msg_container.firstChild) {
                msg_container.removeChild(msg_container.firstChild)
            }

            let msg_tag = document.createElement('p');
            let msg_content = document.createTextNode('Error, you need to verify you are indeed a human');
            msg_tag.appendChild(msg_content);
            msg_tag.style.color = '#FF0000';
            msg_tag.style.textAlign = 'center';
            msg_tag.id = 'error_msg';

            msg_container.appendChild(msg_tag);

            if(msg_container.style.display === 'none') {
                msg_container.style.display = 'block';
                msg_container.style.margin = 'auto';
            }

            return;
        }
        else {
            try {
                emailjs.sendForm('service_ttaz1gh', 'template_3nfgg25', this.form.current, process.env.REACT_APP_EMAIL_USER_ID)
                .then((res) => {
                    console.log('Success!', res.status, res.text);
                })
                .catch((err) => {
                    console.error(err);
                })

                let msg_container = document.getElementById('notif_msg');

                while(msg_container.firstChild) {
                    msg_container.removeChild(msg_container.firstChild)
                }

                let msg_tag = document.createElement('p');
                let msg_content = document.createTextNode('Success! Your email has been sent to me, I\'ll get back to you soon!');
                msg_tag.appendChild(msg_content);
                msg_tag.style.color = '#00FF00';
                msg_tag.style.textAlign = 'center';
                msg_tag.id = 'success_msg';

                msg_container.appendChild(msg_tag);

                if(msg_container.style.display === 'none') {
                    msg_container.style.display = 'block';
                    msg_container.style.margin = 'auto';
                }
            }
            catch (error) {
                console.error(error);

                let msg_container = document.getElementById('notif_msg');

                while(msg_container.firstChild) {
                    msg_container.removeChild(msg_container.firstChild)
                }

                let msg_tag = document.createElement('p');
                let msg_content = document.createTextNode('Error, something went wrong w/the email server, try again later. Sorry!');
                msg_tag.appendChild(msg_content);
                msg_tag.style.color = '#FF0000';
                msg_tag.style.textAlign = 'center';
                msg_tag.id = 'error_msg';

                msg_container.appendChild(msg_tag);

                if(msg_container.style.display === 'none') {
                    msg_container.style.display = 'block';
                    msg_container.style.margin = 'auto';
                }
            }
        }
    }

    render() {
        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <h1 style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>Let's Get in Touch!</h1>
                    <Row>
                        <Col>
                            <form ref={this.form} onSubmit={this.HandleSubmit}>
                                <input placeholder='Enter your name here...' className='form-control' type="text" name="from_name" value={this.state.from_name} onChange={this.handleChange}/><br/>
                                <input placeholder='Enter your email here...' className='form-control' type="email" name="reply_to" value={this.state.reply_to} onChange={this.handleChange}/><br/>
                                <textarea placeholder='What are you writing for?' className='form-control' name="message" rows="15" value={this.state.message} onChange={this.handleChange}/><br/>
                                <input style={{display: 'block', margin: 'auto'}} className="btn btn-primary" type="submit" value="Submit Form" />
                                <ReCAPTCHA ref={this.recaptchaRef} theme='dark' sitekey={!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? process.env.REACT_APP_RECAPTCHA_SITE_KEY_LOCAL : process.env.REACT_APP_RECAPTCHA_SITE_KEY} />
                                <div id='notif_msg' style={{display: 'none'}}></div>
                            </form>
                        </Col>
                        <Col>
                            <h1>Place location and socials links here</h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
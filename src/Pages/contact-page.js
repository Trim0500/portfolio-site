import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';
import emailjs from '@emailjs/browser';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        require('dotenv').config();
        this.form = React.createRef();
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    HandleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_ttaz1gh', 'template_3nfgg25', this.form.current, process.env.REACT_APP_EMAIL_USER_ID)
        .then((res) => {
            console.log('Success!', res.status, res.text);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    render() {
        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <h1>Let's Get in Touch!</h1>
                    <Row>
                        <Col>
                            <form ref={this.form} onSubmit={this.HandleSubmit}>
                                <input placeholder='Enter your name here...' className='form-control' type="text" name="from_name" /><br/>
                                <input placeholder='Enter your email here...' className='form-control' type="email" name="reply_to" /><br/>
                                <textarea placeholder='What are you writing for?' className='form-control' name="message" rows="15" /><br/>
                                <input className="btn btn-primary" type="submit" value="Send" />
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
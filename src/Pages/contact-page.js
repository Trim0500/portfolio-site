import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';
import{ init } from '@emailjs/browser';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EmailJs: init(process.env.REACT_APP_EMAIL_USER_ID)
        }
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    HandleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <h1>Let's Get in Touch!</h1>
                    <Row>
                        <Col>
                            <form onSubmit={this.HandleSubmit}>
                                <input placeholder='Enter your name here...' className='form-control' type="text" name="user_name" /><br/>
                                <input placeholder='Enter your email here...' className='form-control' type="email" name="user_email" /><br/>
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
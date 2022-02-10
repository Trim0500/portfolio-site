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
            message: '',
            recaptchaStatus: false,
            YouTube: null,
            Twitter: null,
            LinkedIn: null,
            GitHub: null
        }
        this.form = React.createRef();
        this.recaptchaRef = React.createRef();
        this.HandleImages = this.HandleImages.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.handleEmailSubmission = this.handleEmailSubmission.bind(this);
        this.handleRecaptchaValidation = this.handleRecaptchaValidation.bind(this);
        this.handleNotifMessage = this.handleNotifMessage.bind(this);
    }

    componentDidMount() {
        var faunadb = require('faunadb'),
        q = faunadb.query

        var client = new faunadb.Client({
            secret: process.env.REACT_APP_FAUNA_ADMIN_KEY,
            domain: 'db.fauna.com',
            port: 443,
            scheme: 'https',
        })

        client.query([
            q.Get(q.Ref(q.Collection('portfolio_images'), '323215794019238479')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '323215820339544655')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '323215865016222287')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '323215886751105615'))
        ])
        .then((data) => this.HandleImages(data))
        .catch((err) => console.error(err))
    }

    HandleImages(data) {
        this.setState({
            ImageList: data
        })

        this.state.ImageList.forEach(element => {
            let name = element.data.ImageTitle;

            const file = element.data.ImageContent;
            const content = new Uint8Array(file);
            const objectUrl = URL.createObjectURL(
                new Blob([content.buffer], { type: 'image/png' })
            );

            this.setState({
                [name]: objectUrl
            })
        });
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
            this.handleNotifMessage(false, 'Error, you need to fill in all the fields first');

            return;
        }
        else if(this.recaptchaRef.current.getValue() === '') {
            this.handleNotifMessage(false, 'Error, you need to verify you are indeed a human');

            return;
        }
        else {
            try {
                this.handleRecaptchaValidation();
            }
            catch (error) {
                console.error(error);

                this.handleNotifMessage(false, 'Error, something went wrong w/the email server, try again later. Sorry!');
            }
        }
    }

    handleEmailSubmission() {
        emailjs.sendForm('service_ttaz1gh', 'template_3nfgg25', this.form.current, process.env.REACT_APP_EMAIL_USER_ID)
        .then((res) => {
            console.log('Success!', res.status, res.text);
        })
        .catch((err) => {
            console.error(err);
        })

        this.handleNotifMessage(true, 'Success! Your email has been sent to me, I\'ll get back to you soon!');
    }

    async handleRecaptchaValidation() {
        const recaptchaValue = {
            token: this.recaptchaRef.current.getValue()
        }
        this.recaptchaRef.current.reset();

        await fetch('https://portfolio-recaptcha.vercel.app/api/recaptcha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recaptchaValue)
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                recaptchaStatus: data.success
            })
            
            if(this.state.recaptchaStatus === false) {
                alert('Failed, reCAPTCHA detected a bot');

                this.handleNotifMessage(false, 'Error, you\'re a bot aren\'t you?');

                return;
            }
            else {
                alert(`Success!`)

                this.handleEmailSubmission();

                this.setState({
                    from_name: '',
                    reply_to: '',
                    message: '',
                    recaptchaStatus: false
                })

                this.recaptchaRef.current.value = '';
            }
        })
        .catch((err) => console.error(err));
    }

    handleNotifMessage(status, message) {
        let msg_container = document.getElementById('notif_msg');

        while(msg_container.firstChild) {
            msg_container.removeChild(msg_container.firstChild)
        }

        let msg_tag = document.createElement('p');
        let msg_content = document.createTextNode(message);
        msg_tag.appendChild(msg_content);
        if(!status) {
            msg_tag.style.color = '#FF0000';
            msg_tag.id = 'error_msg';
        }
        else {
            msg_tag.style.color = '#00FF00';
            msg_tag.id = 'success_msg';
        }
        msg_tag.style.textAlign = 'center';

        msg_container.appendChild(msg_tag);

        if(msg_container.style.display === 'none') {
            msg_container.style.display = 'block';
            msg_container.style.margin = 'auto';
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
                                <ReCAPTCHA ref={this.recaptchaRef} theme='dark' sitekey={!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? process.env.REACT_APP_RECAPTCHA_SITE_KEY_LOCAL : process.env.REACT_APP_RECAPTCHA_SITE_KEY} /><br/>
                                <input style={{display: 'block', margin: 'auto'}} className="btn btn-primary" type="submit" value="Submit Form" />
                                <div id='notif_msg' style={{display: 'none'}}></div>
                            </form>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <img name="yt_img" src={this.state.YouTube} alt="YT Logo" className='contact-imgs' width="200px" height="200px" />
                                </Col>
                                <Col>
                                    <img name="twitter_img" src={this.state.Twitter} alt="Twitter Logo" className='contact-imgs' width="200px" height="200px" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img name="github_img" src={this.state.GitHub} alt="GitHub Logo" className='contact-imgs' width="200px" height="200px" />
                                </Col>
                                <Col>
                                    <img name="linkedin_img" src={this.state.LinkedIn} alt="LinkedIn Logo" className='contact-imgs' width="200px" height="200px" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';
import SinglePage from '../Fragment/single-page-pdf';
import { text_resources } from '../resources/text_resources_en';

export default class ProfessionalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ImageList: [],
            Astro_Ranger_Plat: null,
            Mutant_Pest_Control: null,
            Clifftop_Climb: null,
            NOA_Login: null,
            NOA_Sign: null,
            NOA_Forms: null
        }
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
            q.Get(q.Ref(q.Collection('portfolio_images'), '347306685853861455')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '347306861390725711')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '347306895691743823')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '347306941992665679')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '347306972047999567')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '347307014377964111'))
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

    render() {
        const _text = text_resources[this.props.language];

        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <h1 style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>Here's What I've Done for a Living!</h1>
                    <Row>
                        <Col>
                            <SinglePage pdf={process.env.PUBLIC_URL + '/Lafleur_CV.pdf'} />

                            <h1>{_text.PROFESSIONAL.MSU_CERT_HEADING}</h1>
                            <Container>
                                <p>{_text.PROFESSIONAL.MSU_CERT_OVERVIEW}</p>
                                <p>{_text.PROFESSIONAL.MSU_CERT_LEARNING_1} <a className='p-contact-link' href='https://trim-ge2019.itch.io'>{_text.PROFESSIONAL.MSU_CERT_ITCH}</a> {_text.PROFESSIONAL.MSU_CERT_LEARNING_2}</p>
                                <Row>
                                    <Col>
                                        <img style={{maxWidth: '422px'}} className='professional-imgs' name="Astro_Ranger_Img" src={this.state.Astro_Ranger_Plat} alt="Astro Ranger 2D Platformer" width="422px" height="300px" />
                                    </Col>
                                    <Col>
                                        <img style={{maxWidth: '422px'}} className='professional-imgs' name="Mutant_Pest_Control_Img" src={this.state.Mutant_Pest_Control} alt="Mutant pest Control 3D Shooter" width="422px" height="300px" />
                                    </Col>
                                    <Col>
                                        <img style={{maxWidth: '422px'}} className='professional-imgs' name="Clifftop_Climb_Img" src={this.state.Clifftop_Climb} alt="Clifftop Climb Capstone Project" width="422px" height="300px" />
                                    </Col>
                                </Row>
                                <p>{_text.PROFESSIONAL.MSU_CERT_CAPSTONE_1} <a className='p-contact-link' href='https://youtu.be/Y2fMzNPzsz0'>{_text.PROFESSIONAL.MSU_CERT_PITCH}</a> &amp; <a className="a-pdf-download" href="/Clifftop_Climb_High_Concept.pdf" download>{_text.PROFESSIONAL.MSU_CERT_HIGH_CONCEPT}</a> {_text.PROFESSIONAL.MSU_CERT_CAPSTONE_2}</p>
                            </Container>

                            <h1>{_text.PROFESSIONAL.INTERNSHIP_HEADING}</h1>
                            <Container>
                                <p>{_text.PROFESSIONAL.INTERNSHIP_OVERVIEW}</p>
                                <Row>
                                    <Col>
                                        <img style={{maxWidth: '422px'}} className='professional-imgs' name="NOA_Login_Img" src={this.state.NOA_Login} alt="NexOne Agent Login" width="422px" height="300px" />
                                    </Col>
                                    <Col>
                                        <img style={{maxWidth: '422px'}} className='professional-imgs' name="NOA_Sign_Img" src={this.state.NOA_Sign} alt="NexOne Agent Signing" width="422px" height="300px" />
                                    </Col>
                                    <Col>
                                        <img style={{maxWidth: '422px'}} className='professional-imgs' name="NOA_Forms_Img" src={this.state.NOA_Forms} alt="NexOne Agent Forms" width="422px" height="300px" />
                                    </Col>
                                </Row>
                                <p>{_text.PROFESSIONAL.INTERNSHIP_LEARNING}</p>
                                <p>{_text.PROFESSIONAL.INTERNSHIP_UNIQUE}</p>
                                <p>{_text.PROFESSIONAL.INTERNSHIP_CONCLUSION}</p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
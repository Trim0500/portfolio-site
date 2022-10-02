import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';
import SinglePage from '../Fragment/single-page-pdf';
import { text_resources } from '../resources/text_resources_en';

export default class ProfessionalPage extends React.Component {
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
                                <p>{_text.PROFESSIONAL.MSU_CERT_LEARNING_1} <a className='p-contact-link' href='https://trim-ge2019.itch.io'>itch</a> {_text.PROFESSIONAL.MSU_CERT_LEARNING_2}</p>
                                <p>{_text.PROFESSIONAL.MSU_CERT_CAPSTONE_1} <a className='p-contact-link' href='https://youtu.be/Y2fMzNPzsz0'>pitch</a> &amp; <a className="a-pdf-download" href="/Clifftop_Climb_High_Concept.pdf" download>high concept document</a> {_text.PROFESSIONAL.MSU_CERT_CAPSTONE_2}</p>
                            </Container>

                            <h1>{_text.PROFESSIONAL.INTERNSHIP_HEADING}</h1>
                            <Container>
                                <p>{_text.PROFESSIONAL.INTERNSHIP_OVERVIEW}</p>
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
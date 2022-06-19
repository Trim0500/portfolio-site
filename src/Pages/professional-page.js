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
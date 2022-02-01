import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';
import SinglePage from '../Fragment/single-page-pdf';

export default class ProfessionalPage extends React.Component {
    render() {
        console.log(process.env.PUBLIC_URL + '/Lafleur_CV.pdf');
        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <h1 style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>Here's What I've Done for a Living!</h1>
                    <Row>
                        <Col>
                            <SinglePage pdf={process.env.PUBLIC_URL + '/Lafleur_CV.pdf'} />
                        </Col>
                        <Col>
                            <h1>Place details about particular experiences here</h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
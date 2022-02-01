import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';

export default class ProfessionalPage extends React.Component {
    render() {
        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <h1 style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>Here's What I've Done for a Living!</h1>
                    <Row>
                        <Col>
                            <h1>CV goes here</h1>
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
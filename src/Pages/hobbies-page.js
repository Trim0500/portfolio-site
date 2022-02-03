import React from 'react';
import NavBar from '../Fragment/navbar';
import { Col, Container, Row } from 'react-bootstrap';

export default class HobbiesPage extends React.Component {
    render() {
        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <h1 style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>My hobbies: Analysis, Editing &amp; More!</h1>
                    <Row>
                        <Col>
                            <h3>Edits</h3>
                            <p>Text about edits will go here</p>
                        </Col>
                        <Col>
                            <h1>Images will go here</h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
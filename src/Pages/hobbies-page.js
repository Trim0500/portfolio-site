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
                        <Col sm={5}>
                            <h3>Edits</h3>
                            <p>{process.env.REACT_APP_EDITS_TEXT_1}</p>
                            <p>{process.env.REACT_APP_EDITS_TEXT_2}</p>
                        </Col>
                        <Col sm={7}>
                            <h1>Images will go here</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <h3>Videos</h3>
                            <p>{process.env.REACT_APP_VIDEOS_TEXT_1}</p>
                            <p>{process.env.REACT_APP_VIDEOS_TEXT_2}</p>
                            <p>If you like the samples embedded here, check out the <a className='p-contact-link' href='/contact'>contact page</a> to find my channel!</p>
                        </Col>
                        <Col sm={7}>
                            <h1>Video Embeds will go here</h1>
                        </Col>
                    </Row>
                    <Row>
                        <h1>Landsacpes</h1>
                        <p style={{textAlign: "center"}}>{process.env.REACT_APP_LANDSCAPES_TEXT}</p>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Image goes here</h1>
                            <p style={{textAlign: "center"}}>Caption text</p>
                        </Col>
                        <Col>
                            <h1>Image goes here</h1>
                            <p style={{textAlign: "center"}}>Caption text</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Image goes here</h1>
                            <p style={{textAlign: "center"}}>Caption text</p>
                        </Col>
                        <Col>
                            <h1>Image goes here</h1>
                            <p style={{textAlign: "center"}}>Caption text</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
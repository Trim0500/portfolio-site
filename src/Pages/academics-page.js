import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';

export default class AcademicsPage extends React.Component {
    constructor(props) {
        super(props);
        this.showProjectsHeaders = this.showProjectsHeaders.bind(this);
    }

    showProjectsHeaders() {
        var x = document.getElementById("projectsHeaders");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    render() {
        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <h1 style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>My Academics</h1>
                    <Row>
                        <Col>
                            <h3>Overview of Comp Sci @ Champlain</h3>
                            <p>Text Goes here</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button className="btn btn-primary-pdf" type="button" onClick={this.showProjectsHeaders}>Notable Projects</button>
                            <div id='projectsHeaders' style={{display: 'none'}}>
                                <ul style={{listStyleType: 'none'}}>
                                    <li style={{padding: '0.5em 0 0.5em 0'}}><button className='btn btn-primary-pdf' type='button'>PETA Wars - Game Development w/Unity</button></li>
                                    <li style={{padding: '0.5em 0 0.5em 0'}}><button className='btn btn-primary-pdf' type='button'>Champlain Pet Clinic - Final Project 1</button></li>
                                    <li style={{padding: '0.5em 0 0.5em 0'}}><button className='btn btn-primary-pdf' type='button'>Contacts App - .NET Development</button></li>
                                    <li style={{padding: '0.5em 0 0.5em 0'}}><button className='btn btn-primary-pdf' type='button'>Ultrasound to RGB - Introduction to IoT &amp; C++</button></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Engagement in Student Life</h3>
                            <p>Text Goes here</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
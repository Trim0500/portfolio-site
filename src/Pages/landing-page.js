import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/styles.css'

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PFPImage: '',
            HobbiesImage: '',
            AcademicsImage: '',
            ContactImage: ''
        }
    }

    render() {
        return(
            <Container name="Content">
                <Row name="Image_Div">
                    <Col sm={4} name="PFP_Div"><img name="PFP" src={this.PFPImage} alt="PFP by Fireplace" width="631px" height="631" /></Col>
                    <Col sm={8} name="Header_Div">
                        <h1>Welcome to Trim's Space!</h1>
                        <p>{process.env.REACT_APP_LANDING_PAGE_INTRO}</p>
                        <Row>
                            <Col>
                                <img name="Hobbies_Img" src={this.HobbiesImage} alt="Hobbies Thumbnail" width="350px" height="350px" />
                            </Col>
                            <Col>
                                <img name="Academics_Img" src={this.AcademicsImage} alt="Academics Thumbnail" width="350px" height="350px" />
                            </Col>
                            <Col>
                                <img name="Contact_Img" src={this.ContactImage} alt="Contacts Thumbnail" width="350px" height="350px" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a name="Hobbies_Link" href='/'>Let me Tell you About What I Like!</a>
                            </Col>
                            <Col>
                                <a name="Academics_Link" href='/'>Check Out What I've Learned!</a>
                            </Col>
                            <Col>
                                <a name="Contact_Link" href='/'>Let's Get in Touch!</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
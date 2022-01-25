import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/styles.css'

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PFPImage: null,
            HobbiesImage: '',
            AcademicsImage: '',
            ContactImage: ''
        }
        require('dotenv').config();
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

        client.query(
            q.Get(q.Ref(q.Collection('portfolio_images'), '321530096090350159'))
        )
        .then((res) => {
            const file = res.data.ImageContent;
            console.log(file);
            const content = new Uint8Array(file);
            console.log(content);
            const objectUrl = URL.createObjectURL(
                new Blob([content.buffer], { type: 'image/png' })
            );
            console.log(objectUrl);

            this.setState({
                PFPImage: objectUrl
            })
        })
        .catch((err) => console.error(err))
    }

    render() {
        return(
            <Container name="Content">
                <Row name="Image_Div">
                    <Col sm={4} name="PFP_Div"><img name="PFP" src={this.state.PFPImage} alt="PFP by Fireplace" width="425px" height="425px" /></Col>
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
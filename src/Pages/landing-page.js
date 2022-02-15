import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/styles.css'

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ImageList: [],
            Me: null,
            Echoes_Vid_Tumbnail: null,
            School_Logo: null,
            Socials: null
        }
        this.HandleImages = this.HandleImages.bind(this);
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

        client.query([
            q.Get(q.Ref(q.Collection('portfolio_images'), '321530096090350159')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '321791953526063695')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '321792128831193679')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '321792680777482831')),
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
        return(
            <Container fluid>
                <Container name="Content" className='container-content-landing' fluid>
                    <Row name="Image_Div">
                        <Col sm={5} name="PFP_Div">
                            <img name="PFP" src={this.state.Me} alt="PFP by Fireplace" width="650px" height="650px" className='landing-imgs' />
                        </Col>
                        <Col sm={7} name="Header_Div">
                            <h1>Welcome to Trim's Space!</h1>
                            <p>{process.env.REACT_APP_LANDING_PAGE_INTRO}</p>
                            <Row>
                                <Col>
                                    <img name="Hobbies_Img" src={this.state.Echoes_Vid_Tumbnail} alt="Hobbies Thumbnail" width="266px" height="200px" className='landing-imgs' />
                                    <div className='center'>
                                        <a className="a-pdf-download" name="Hobbies_Link" href='/hobbies'>Let me Tell you About What I Like!</a>
                                    </div>
                                </Col>
                                <Col>
                                    <img name="Academics_Img" src={this.state.School_Logo} alt="Academics Thumbnail" width="200px" height="200px" className='landing-imgs' />
                                    <div className='center'>
                                        <a className="a-pdf-download" name="Academics_Link" href='/academics'>Check Out What I've Learned!</a>
                                    </div>
                                </Col>
                                <Col>
                                    <img name="Contact_Img" src={this.state.Socials} alt="Contacts Thumbnail" width="200px" height="200px" className='landing-imgs' />
                                    <div className='center'>
                                        <a className="a-pdf-download" name="Contact_Link" href='/contact'>Let's Get in Touch!</a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
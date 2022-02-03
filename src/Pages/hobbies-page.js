import React from 'react';
import NavBar from '../Fragment/navbar';
import { Col, Container, Row } from 'react-bootstrap';

export default class HobbiesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ImageList: [],
            Nutball: null,
            FEH: null,
            New_Mystery: null,
            Virgin: null,
            Gaspésie: null,
            Horizon: null,
            Flowers: null,
            Winter: null
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
            q.Get(q.Ref(q.Collection('portfolio_images'), '321706434962129487')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '321707129411994191')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '321707641024807503')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '321707820239028815')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '322588422043599439')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '322588532856062543')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '322588697409094223')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '322588862648943183'))
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
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wwiHrH4ebeM?controls=0&amp;start=757" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ak2lV5cVdP8?controls=0&amp;start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
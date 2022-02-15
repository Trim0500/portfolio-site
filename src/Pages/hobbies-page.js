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
                    <span className='anchor-nav'>
                        <p>Quick Links: <a className='a-pdf-download' href='#Edits_Header'>Edits</a> <a className='a-pdf-download' href='#Videos_Header'>Videos</a> <a className='a-pdf-download' href='#Landscapes_Header'>Landscapes</a></p>
                    </span>
                    <h1 id='Hobbies_Header' style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>My hobbies: Analysis, Editing &amp; More!</h1>
                    <Row>
                        <Col sm={5}>
                            <h3 id='Edits_Header'>Edits</h3>
                            <p>{process.env.REACT_APP_EDITS_TEXT_1}</p>
                            <p>{process.env.REACT_APP_EDITS_TEXT_2}</p>
                            <p>Fun Fact: I made all of these edits on PowerPoint! It's lowkey a really good budget photoshop option!</p>
                        </Col>
                        <Col sm={7}>
                            <Row>
                                <Col>
                                    <img style={{maxWidth: '346px'}} className='edits-imgs' name="Nutball_Img" src={this.state.Nutball} alt="Nutball meme" width="346px" height="260px" />
                                    <p style={{textAlign: "center"}}>Nutball do be wild.</p>
                                </Col>
                                <Col>
                                    <img style={{maxWidth: '346px'}} className='edits-imgs' name="FE12_Img" src={this.state.New_Mystery} alt="New Mystery meme" width="346px" height="260px" />
                                    <p style={{textAlign: "center"}}>I make the weirdest connections...</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img style={{maxWidth: '346px'}} className='edits-imgs' name="FEH_Img" src={this.state.FEH} alt="FEH iPad background" width="346px" height="260px" />
                                    <p style={{textAlign: "center"}}>Fire Emblem Heroes iPad background which emphasizes my best units!</p>
                                </Col>
                                <Col>
                                    <img style={{maxWidth: '346px'}} className='edits-imgs' name="Virgin_Img" src={this.state.Virgin} alt="Vergil Bloody Palace run" width="346px" height="193px" />
                                    <p style={{textAlign: "center"}}>This is one of the thumbnails to my first DMC5 Bloody Palace clear on YT!</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <h3 id='Videos_Header'>Videos</h3>
                            <p>{process.env.REACT_APP_VIDEOS_TEXT_1}</p>
                            <p>{process.env.REACT_APP_VIDEOS_TEXT_2}</p>
                            <p>If you like the samples embedded here, check out the <a className='p-contact-link' href='/contact'>contact page</a> to find my channel!</p>
                        </Col>
                        <Col sm={7}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wwiHrH4ebeM?controls=0&amp;start=757" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p style={{textAlign: "center"}}>One of my most recent &amp; personal favorite analysis videos! Strap in though, it's a long one!</p>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ak2lV5cVdP8?controls=0&amp;start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p style={{textAlign: "center"}}>I thought this moment in Fire Emblem Binding Blade was funny!</p>
                        </Col>
                    </Row>
                    <Row>
                        <h1 id='Landscapes_Header'>Landscapes</h1>
                        <p style={{textAlign: "center"}}>{process.env.REACT_APP_LANDSCAPES_TEXT}</p>
                    </Row>
                    <Row>
                        <Col>
                            <img className='landscapes-imgs' name="Gaspésie_Img" src={this.state.Gaspésie} alt="Gaspésie mountain river" width="618px" height="285px" />
                            <p style={{textAlign: "center"}}>A cool shot looking out into a river at Gaspésie</p>
                        </Col>
                        <Col>
                            <img className='landscapes-imgs' name="Winter_Img" src={this.state.Winter} alt="Winter farm field" width="618px" height="285px" />
                            <p style={{textAlign: "center"}}>Winter makes for gourgeous sunsets!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className='landscapes-imgs' name="Flower_Img" src={this.state.Flowers} alt="White flower close-up" />
                            <p style={{textAlign: "center"}}>Got a neat close-up w/background being blurred out!</p>
                        </Col>
                        <Col>
                            <img className='landscapes-imgs' name="Horizon_Img" src={this.state.Horizon} alt="Gaspésie horizon selfie" />
                            <p style={{textAlign: "center"}}>I thought the top of the mountain would make for a great profile shot.</p>
                        </Col>
                    </Row>
                    <span><p>Back to <a className='a-pdf-download' href='#Hobbies_Header'>top</a></p></span>
                </Container>
            </Container>
        )
    }
}
import React from 'react';
import NavBar from '../Fragment/navbar';
import { Col, Container, Row } from 'react-bootstrap';
import { text_resources } from '../resources/text_resources_en';

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
        const _text = text_resources[this.props.language];

        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <span className='anchor-nav'>
                        <p>{_text.HOBBIES.QUICK_LINKS}<a className='a-pdf-download' href='#Edits_Header'>{_text.HOBBIES.EDITS_LINK}</a> <a className='a-pdf-download' href='#Videos_Header'>{_text.HOBBIES.VIDEOS_LINK}</a> <a className='a-pdf-download' href='#Landscapes_Header'>{_text.HOBBIES.LANDSCAPES_LINK}</a></p>
                    </span>
                    <h1 id='Hobbies_Header' style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>{_text.HOBBIES.HOBBIES_HEADER}</h1>
                    <Row>
                        <Col sm={5}>
                            <h3 id='Edits_Header'>{_text.HOBBIES.EDITS_LINK}</h3>
                            <p>{_text.HOBBIES.EDITS_INTRO_TEXT}</p>
                            <p>{_text.HOBBIES.EDITS_EXAMPLE_TEXT}</p>
                            <p>{_text.HOBBIES.EDITS_FUN_FACT_TEXT}</p>
                        </Col>
                        <Col sm={7}>
                            <Row>
                                <Col>
                                    <img style={{maxWidth: '346px'}} className='edits-imgs' name="Nutball_Img" src={this.state.Nutball} alt="Nutball meme" width="346px" height="260px" />
                                    <p style={{textAlign: "center"}}>{_text.HOBBIES.EDITS_NUTBALL_TEXT}</p>
                                </Col>
                                <Col>
                                    <img style={{maxWidth: '346px'}} className='edits-imgs' name="FE12_Img" src={this.state.New_Mystery} alt="New Mystery meme" width="346px" height="260px" />
                                    <p style={{textAlign: "center"}}>{_text.HOBBIES.EDITS_NM_TEXT}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img style={{maxWidth: '346px'}} className='edits-imgs' name="FEH_Img" src={this.state.FEH} alt="FEH iPad background" width="346px" height="260px" />
                                    <p style={{textAlign: "center"}}>{_text.HOBBIES.EDITS_FEH_TEXT}</p>
                                </Col>
                                <Col>
                                    <img style={{maxWidth: '346px'}} className='edits-imgs' name="Virgin_Img" src={this.state.Virgin} alt="Vergil Bloody Palace run" width="346px" height="193px" />
                                    <p style={{textAlign: "center"}}>{_text.HOBBIES.EDITS_BLOODY_PALACE_TEXT}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <h3 id='Videos_Header'>{_text.HOBBIES.VIDEOS_LINK}</h3>
                            <p>{_text.HOBBIES.VIDEOS_INTRO_TEXT}</p>
                            <p>{_text.HOBBIES.VIDEOS_EXAMPLES_TEXT}</p>
                            <p>{_text.HOBBIES.VIDEOS_LINK_TEXT_1}<a className='p-contact-link' href='/contact'>{_text.HOBBIES.VIDEOS_LINK_TEXT_2}</a>{_text.HOBBIES.VIDEOS_LINK_TEXT_3}</p>
                        </Col>
                        <Col sm={7}>
                            <div className='video-container'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/wwiHrH4ebeM?&amp;start=757" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <p style={{textAlign: "center"}}>{_text.HOBBIES.VIDEOS_ECHOES_TEXT}</p>
                            <div className='video-container'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/o6PvyBwrIeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p style={{textAlign: "center"}}>{_text.HOBBIES.VIDEOS_MEME_TEXT}</p>
                        </Col>
                    </Row>
                    <Row>
                        <h1 id='Landscapes_Header'>{_text.HOBBIES.LANDSCAPES_LINK}</h1>
                        <p style={{textAlign: "center"}}>{_text.HOBBIES.LANDSCAPES_OVERVIEW_TEXT}</p>
                    </Row>
                    <Row>
                        <Col>
                            <img style={{maxWidth: '618px'}} className='landscapes-imgs' name="Gaspésie_Img" src={this.state.Gaspésie} alt="Gaspésie mountain river" width="618px" height="285px" />
                            <p style={{textAlign: "center"}}>{_text.HOBBIES.LANDSCAPES_GASPESIE_TEXT}</p>
                        </Col>
                        <Col>
                            <img style={{maxWidth: '618px'}} className='landscapes-imgs' name="Winter_Img" src={this.state.Winter} alt="Winter farm field" width="618px" height="285px" />
                            <p style={{textAlign: "center"}}>{_text.HOBBIES.LANDSCAPES_WINTER_TEXT}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className='landscapes-imgs' name="Flower_Img" src={this.state.Flowers} alt="White flower close-up" />
                            <p style={{textAlign: "center"}}>{_text.HOBBIES.LANDSCAPES_FLOWER_TEXT}</p>
                        </Col>
                        <Col>
                            <img className='landscapes-imgs' name="Horizon_Img" src={this.state.Horizon} alt="Gaspésie horizon selfie" />
                            <p style={{textAlign: "center"}}>{_text.HOBBIES.LANDSCAPES_PORTRAIT_TEXT}</p>
                        </Col>
                    </Row>
                    <span><p>{_text.HOBBIES.HOBBIES_BACKTOP_TEXT_1}<a className='a-pdf-download' href='#Hobbies_Header'>{_text.HOBBIES.HOBBIES_BACKTOP_TEXT_2}</a></p></span>
                </Container>
            </Container>
        )
    }
}
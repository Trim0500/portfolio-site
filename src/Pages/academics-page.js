import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';
import { text_resources } from '../resources/text_resources_en';

export default class AcademicsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ImageList: [],
            School_Logo: null,
            Unity: null,
            MS_NET: null,
            Arduino: null,
            Club_Logo: null
        }
        this.showProjectsHeaders = this.showProjectsHeaders.bind(this);
        this.showProjectText = this.showProjectText.bind(this);
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
            q.Get(q.Ref(q.Collection('portfolio_images'), '321792128831193679')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '323060486570508879')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '323061103356543567')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '323060819292062287')),
            q.Get(q.Ref(q.Collection('portfolio_images'), '323061495976952399')),
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

    showProjectsHeaders(e) {
        var x = e.target.id;
        var y = '';

        switch(x) {
            case "projectsHeader":
                y = document.getElementById('projectsHeaders');
                this.showProjectText(y);
                break;
            case 'unityHeader':
                y = document.getElementById('unityText');
                this.showProjectText(y);
                break;
            case 'finalProjectHeader':
                y = document.getElementById('finalProjectText');
                this.showProjectText(y);
                break;
            case 'netHeader':
                y = document.getElementById('netText');
                this.showProjectText(y);
                break;
            case 'iotHeader':
                y = document.getElementById('iotText');
                this.showProjectText(y);
                break;
            default:
                break;
        }
    }

    showProjectText(domElement) {
        if (domElement.style.display === "none") {
            domElement.style.display = "block";
        } else {
            domElement.style.display = "none";
        }
    }

    render() {
        const _text = text_resources[this.props.language];

        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <span className='anchor-nav'>
                        <p>{_text.ACADEMICS.QUICK_LINKS}<a className='a-pdf-download' href='#Overview_Header'>{_text.ACADEMICS.OVERVIEW_LINK}</a> <a className='a-pdf-download' href='#projectsHeader'>{_text.ACADEMICS.NOTABLE_PROJECTS_LINK}</a> <a className='a-pdf-download' href='#Student_Life_Header'>{_text.ACADEMICS.STUDENT_LIFE_LINK}</a></p>
                    </span>
                    <h1 id='Academics_Header' style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>{_text.ACADEMICS.ACADEMICS_HEADER}</h1>
                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    <Col sm={9}>
                                        <h3 id='Overview_Header'>{_text.ACADEMICS.ACADEMICS_OVERVIEW}</h3>
                                        <p>{_text.ACADEMICS.OVERVIEW_TEXT}</p>
                                    </Col>
                                    <Col sm={3}>
                                        <img style={{maxWidth: '275px'}} className='academics-imgs' name="School_Img" src={this.state.School_Logo} alt="Champlain College logo" width="275px" height="275px" />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container>
                                <h4 style={{textAlign: 'center'}} id='projectsHeader' onClick={this.showProjectsHeaders}>{_text.ACADEMICS.NOTABLE_PROJECTS_HEADER}</h4>
                                <div id='projectsHeaders' style={{display: 'none'}}>
                                    <ul style={{listStyleType: 'none'}}>
                                        <li style={{padding: '0.5em 0 0.5em 0'}}>
                                            <h4 id='unityHeader' onClick={this.showProjectsHeaders}>{_text.ACADEMICS.PETA_HEADER}</h4>
                                            <Container>
                                                <div id='unityText' style={{display: 'none'}}>
                                                    <p>{_text.ACADEMICS.PETA_OVERVIEW_TEXT}</p>
                                                    <Row>
                                                        <Col>
                                                            <img style={{maxWidth: '531px'}} className='academics-imgs' name="Unity_Img" src={this.state.Unity} alt="Unity logo" width="531px" height="300px" />
                                                            <div className='video-container'>
                                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/rE40K9uZmPA?&amp;start=157" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <p>{_text.ACADEMICS.PETA_PREMISE_TEXT}</p>
                                                    <p>
                                                        {_text.ACADEMICS.PETA_HOSTING_TEXT_1}<a className='p-contact-link' href='https://trim-ge2019.itch.io' target="_blank" rel="noopener noreferrer">{_text.ACADEMICS.PETA_HOSTING_TEXT_2}</a>{_text.ACADEMICS.PETA_HOSTING_TEXT_3}
                                                    </p>
                                                </div>
                                            </Container>
                                        </li>
                                        <li style={{padding: '0.5em 0 0.5em 0'}}>
                                            <h4 id='netHeader' onClick={this.showProjectsHeaders}>{_text.ACADEMICS.CONTACTS_APP_HEADER}</h4>
                                            <Container>
                                                <div id='netText' style={{display: 'none'}}>
                                                    <p>{_text.ACADEMICS.CONTACTS_OVERVIEW_TEXT}</p>
                                                    <Row>
                                                        <Col>
                                                            <img style={{maxWidth: '500px'}} className='academics-imgs' name=".NET_Img" src={this.state.MS_NET} alt=".NET logo" width="500px" height="315px" />
                                                            <div className='video-container'>
                                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/RerorDIrMDE?&amp;start=17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <p>{_text.ACADEMICS.CONTACTS_SPECIFICS_TEXT}</p>
                                                    <p>
                                                        {_text.ACADEMICS.CONTACTS_HOSTING_TEXT_1}<a className='p-contact-link' href='/contact'>{_text.ACADEMICS.CONTACTS_HOSTING_TEXT_2}</a>{_text.ACADEMICS.CONTACTS_HOSTING_TEXT_3}
                                                    </p>
                                                </div>
                                            </Container>
                                        </li>
                                        <li style={{padding: '0.5em 0 0.5em 0'}}>
                                            <h4 id='iotHeader' onClick={this.showProjectsHeaders}>{_text.ACADEMICS.IOT_HEADER}</h4>
                                            <Container>
                                                <div id='iotText' style={{display: 'none'}}>
                                                    <p>{_text.ACADEMICS.IOT_OVERVIEW_TEXT}</p>
                                                    <Row>
                                                        <Col>
                                                            <img style={{maxWidth: '419px'}} className='academics-imgs' name="Arduino_Img" src={this.state.Arduino} alt="Arduino logo" width="419px" height="315px" />
                                                            <div className='video-container'>
                                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/P9NM07GIJt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <p>{_text.ACADEMICS.IOT_SPECIFICS_TEXT}</p>
                                                    <p>
                                                        {_text.ACADEMICS.IOT_HOSTING_TEXT_1}<a className='p-contact-link' href='https://www.youtube.com/watch?v=P9NM07GIJt8&list=PLUlGrbJ3qjqbUdoJFW0wxEUmwPjdD2_vW&index=6'>{_text.ACADEMICS.IOT_HOSTING_TEXT_2}</a>{_text.ACADEMICS.IOT_HOSTING_TEXT_3}
                                                    </p>
                                                </div>
                                            </Container>
                                        </li>
                                        <li style={{padding: '0.5em 0 0.5em 0'}}>
                                            <h4 id='finalProjectHeader' onClick={this.showProjectsHeaders}>{_text.ACADEMICS.PETCLINIC_HEADER}</h4>
                                            <Container>
                                                <div id='finalProjectText' style={{display: 'none'}}>
                                                    <p>{_text.ACADEMICS.PETCLINIC_OVERVIEW_TEXT}</p>
                                                    <p>{_text.ACADEMICS.PETCLINIC_SPECIFICS_TEXT}</p>
                                                </div>
                                            </Container>
                                        </li>
                                    </ul>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 id='Student_Life_Header'>{_text.ACADEMICS.STUDENT_LIFE_HEADER}</h3>
                            <Container>
                                <p>{_text.ACADEMICS.STUDENT_LIFE_OVERVIEW}</p>
                                <p>{_text.ACADEMICS.STUDENT_LIFE_SPCIFICS}</p>
                                <Row>
                                    <Col>
                                        <img style={{maxWidth: '605px'}} className='academics-imgs' name="Club_Img" src={this.state.Club_Logo} alt="Champlain Gaming Club logo" width="605px" height="315px" />
                                    </Col>
                                    <Col>
                                    <div className='video-container'>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/syEeMusOnyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <span><p>{_text.ACADEMICS.ACADEMICS_BACKTOP_TEXT_1}<a className='a-pdf-download' href='#Academics_Header'>{_text.ACADEMICS.ACADEMICS_BACKTOP_TEXT_2}</a></p></span>
                </Container>
            </Container>
        )
    }
}
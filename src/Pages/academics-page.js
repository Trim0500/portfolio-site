import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';

export default class AcademicsPage extends React.Component {
    constructor(props) {
        super(props);
        this.showProjectsHeaders = this.showProjectsHeaders.bind(this);
        this.showProjectText = this.showProjectText.bind(this);
    }

    showProjectsHeaders(e) {
        var x = e.target.name;
        var y = '';

        switch(x) {
            case "projectsBtn":
                y = document.getElementById('projectsHeaders');
                this.showProjectText(y);
                break;
            case 'unityBtn':
                y = document.getElementById('unityText');
                this.showProjectText(y);
                break;
            case 'finalProjectBtn':
                y = document.getElementById('finalProjectText');
                this.showProjectText(y);
                break;
            case 'netBtn':
                y = document.getElementById('netText');
                this.showProjectText(y);
                break;
            case 'iotBtn':
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
        return (
            <Container>
                <NavBar />
                <Container className='container-content'>
                    <h1 style={{paddingBottom: "0.5em", paddingTop: "0.5em"}}>My Academics</h1>
                    <Row>
                        <Col>
                            <h3>Overview of Comp Sci @ Champlain</h3>
                            <p>
                                The highest level of education I have achieved thus far is a technical degree of collegial studies at Champlain College St. Lambert in Longueil Quebec.
                                It lasted about 3 years and covered a wide array of topics and fields in computer science.
                                From simple programming in Java to building entire web services, conducting system analysis, carrying out SCRUM projects and much, much more.
                                I’d like to think that from this part of my educational career, I really came into my own as a backend developer specializing in C#.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button name='projectsBtn' className="btn btn-primary-pdf" type="button" onClick={this.showProjectsHeaders}>Notable Projects</button>
                            <div id='projectsHeaders' style={{display: 'none'}}>
                                <ul style={{listStyleType: 'none'}}>
                                    <li style={{padding: '0.5em 0 0.5em 0'}}>
                                        <button name='unityBtn' className='btn btn-primary-pdf' type='button' onClick={this.showProjectsHeaders}>PETA Wars - Game Development w/Unity</button>
                                        <div id='unityText' style={{display: 'none'}}>
                                            <p>
                                                Easily my favorite project to date has been the video game that I had to build from scratch for my game development class using the Unity game engine.
                                                From that course I gained a host of skills that I’ve been taking some time long after the class has concluded such as programming scene transitions,
                                                UI, crafting design documents for screens and using tile maps to make them, leading a development team and my favorite; camera control! 
                                            </p>
                                            <p>
                                                The game premise is rather silly, you’re a lone person having infiltrated PETA HQ to stop a ridiculous PR campaign and now needs to escape.
                                                But hey, I feel like it’s important to not take it too seriously and a simple premise is enough if the core game is good right?
                                            </p>
                                            <p>
                                                I’m hosting a build on my <a className='p-contact-link' href='/contact'>GitHub</a> so if you want to give it a try, I implore you to play!
                                            </p>
                                        </div>
                                    </li>
                                    <li style={{padding: '0.5em 0 0.5em 0'}}>
                                        <button name='finalProjectBtn' className='btn btn-primary-pdf' type='button' onClick={this.showProjectsHeaders}>Champlain Pet Clinic - Final Project 1</button>
                                        <div id='finalProjectText' style={{display: 'none'}}>
                                            <p>
                                                As part of a comprehensive class that is meant to test our ability to collate all our accumulated knowledge up to the end of the program,
                                                I had to team up with 4 other students to develop a “Bill” domain of a larger internal project mandated by our school’s department.
                                                We would carry out development in 2 week long sprints over 6 weeks using the SCRUM framework. 
                                            </p>
                                            <p>
                                                I would say that this was a critical experience to learn how to communicate,
                                                coordinate and perform in a professional environment which helped a great deal to know what to expect from my internship in the next semester.
                                                Some notable skills that were tested were my abilities to bring up and assign user stories, deliver a story in a full stack context, organize and conduct daily stand-ups &amp; present for Sprint Reviews.
                                            </p>
                                        </div>
                                    </li>
                                    <li style={{padding: '0.5em 0 0.5em 0'}}>
                                        <button name='netBtn' className='btn btn-primary-pdf' type='button' onClick={this.showProjectsHeaders}>Contacts App - .NET Development</button>
                                        <div id='netText' style={{display: 'none'}}>
                                            <p>
                                                This was the course project I had to make w/2 other students in our .NET class.
                                                The objective was to create a console app that allows a user to manage their contacts stored on a database using WPF. 
                                            </p>
                                            <p>
                                                I thought this was a fun project to take on considering that I really enjoyed making C# &amp; WPF apps in .NET. I would say that this project is what sold me on .NET development by the end of it.
                                                It allows for full CRUD operations on the contacts, importing and exporting the contacts into csv files, connecting to SQL Server instance, filtering the contacts and has a user-friendly interface to boot!
                                            </p>
                                            <p>
                                                This project is hosted on my <a className='p-contact-link' href='/contact'>GitHub</a> as one of my pinned projects so feel free to click here to see it and run it if you want!
                                            </p>
                                        </div>
                                    </li>
                                    <li style={{padding: '0.5em 0 0.5em 0'}}>
                                        <button name='iotBtn' className='btn btn-primary-pdf' type='button' onClick={this.showProjectsHeaders}>Ultrasound to RGB - Introduction to IoT &amp; C++</button>
                                        <div id='iotText' style={{display: 'none'}}>
                                            <p>
                                                The IoT course was nothing short of a nice change of pace from the rest of the courses in the program as it was a fun bout of creative engineering for sure!
                                                One of my favorite labs to have come out of that course was a small ultrasound device that would detect your relative distance to it and use an RGB LED to signal if you were close to it or far!
                                            </p>
                                            <p>
                                                This was a lab where I was free to experiment on whatever I wanted so long as I was using an input device with some output.
                                                By the lab’s completion I was giddy to show people what I had built and felt very proud of it despite it’s relative simplicity!
                                            </p>
                                            <p>
                                                You can check out <a className='p-contact-link' href='https://www.youtube.com/watch?v=P9NM07GIJt8&list=PLUlGrbJ3qjqbUdoJFW0wxEUmwPjdD2_vW&index=6'>this link</a> to view a demo of the lab and then go here to check out the code for it!
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Engagement in Student Life</h3>
                            <p>
                                Of course, schooling for me wasn’t just lecture here, lab there and test over yonder.
                                During my time at Champlain I decided to join it’s Gaming Club managed by other students at the school and became an Executive and later on, President!
                            </p>
                            <p>
                                During my tenure as an Executive and President I had the responsibility of maintaining the club space at school to be inviting, positive and a reprieve from the stresses and volatility of everyday school life.
                                Our room was small but cozy and our numbers were large and passionate!
                                To that end I organized several events and fundraisers, maintained a public Discord and stayed in the good graces of our student association and administrative body!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
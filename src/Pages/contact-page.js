import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../Fragment/navbar';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <NavBar />
            </Container>
        )
    }
}
import React from 'react';
import { Nav } from 'react-bootstrap';

export default function NavBar() {
    return(
        <Nav fill className='justify-content-center'>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/hobbies" >Hobbies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/academics" >Academics</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/professional">Professional Life</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
        );
}
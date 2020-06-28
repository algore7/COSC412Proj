import React from 'react';
import {Nav,Navbar,Container,Row,Col} from 'react-bootstrap';

export default class WebsiteNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="">Website Title</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#trivia">Trivia Game</Nav.Link>
                        <Nav.Link href="#link1">TODO</Nav.Link>
                        <Nav.Link href="#link2">TODO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
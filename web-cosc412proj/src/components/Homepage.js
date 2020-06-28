import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    changeToTrivia = () => {
        this.props.onComponentChange("trivia", "#0B6623");
    }

    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="">Website Title</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link onClick={this.changeToTrivia}>Trivia Game</Nav.Link>
                        <Nav.Link>TODO1</Nav.Link>
                        <Nav.Link>TODO2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


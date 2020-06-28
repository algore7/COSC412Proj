import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

export default class TriviaGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid>
                <h1>Trivia Game</h1>
                <Row>
                    <Col lg="12"></Col>
                </Row>
            </Container>
        );
    }
}
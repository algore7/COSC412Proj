import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Homepage from './Homepage';

export default class TriviaGame extends React.Component {
    constructor(props) {
        super(props);
    }

    changeToHomepage = () => {
        this.props.onComponentChange("homepage");
    }

    render() {
        return (
            <Container fluid>
                <h1>Trivia Game</h1>
                <button onClick={this.changeToHomepage}>Back</button>
            </Container>
        );
    }
}
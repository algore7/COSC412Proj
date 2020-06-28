import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './TriviaGame.css';

export default class TriviaGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "initial",
            questions: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/trivia_questions")
        .then(res => res.json())
        .then(result => {
            this.setState({questions: result});
            console.log(this.state.questions);
        });
    }

    changeToHomepage = () => {
        this.props.onComponentChange("homepage");
    }

    startGame = () => {

    }

    render() {
        let currComponent = null;
        if (this.state.status === "initial") {
            currComponent = <Container fluid id="trivia-container">
                                <h1>Welcome to Trivia Game!</h1>
                                <br/>
                                <button className="initial-btn" onClick={this.changeToHomepage}>Back</button>
                                <button className="initial-btn" id="initial-play-btn"  onClick={this.startGame}>Play</button>
                            </Container>
        }
        

        return currComponent;
    }
}
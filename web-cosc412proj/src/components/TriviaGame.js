import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './TriviaGame.css';

export default class TriviaGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "initial",
            questions: [],
            currentQuestionIndex: 0
        }
    }

    shuffle(array) {
        let shuffleInt = Math.floor(Math.random() * Math.floor(100));
        let startIndex = 0;
        let i = 0;
        while(i < shuffleInt){
            if (startIndex + 1 == array.length) {
                startIndex = 0;
            }
            let temp = array[startIndex];
            array[startIndex] = array[startIndex+1];
            array[startIndex+1] = temp;
            startIndex++;
            i++;
        }
        return array;
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/trivia_questions")
        .then(res => res.json())
        .then(result => {
            this.setState({questions: this.initQuestions(result)});
        });
    }

    initQuestions(result) {
        let resultQuestions = [];
        for(let question of result) {
            question["choices"] = [question["answer"], ...(question["falseAnswers"]).split(",")];
            question["choices"] = this.shuffle(question["choices"]);
            resultQuestions.push(question);
        }
        resultQuestions = this.shuffle(resultQuestions);
        return resultQuestions;
    }

    changeToHomepage = () => {
        this.props.onComponentChange("homepage", "white");
    }

    startGame = () => {
        this.setState({
            status: "playing",
            questions: this.initQuestions(this.state.questions),
            currentQuestionIndex: 0
        });
    }

    checkAnswer = (number) => {
        let currQuestion = this.state.questions[this.state.currentQuestionIndex];
        if(currQuestion["choices"][number] === currQuestion["answer"]) {
            let nextNumber = this.state.currentQuestionIndex + 1;
            if (nextNumber === this.state.questions.length) {
                return;
            }
            this.setState({currentQuestionIndex: nextNumber});
        }
        else {
            this.setState({status: "lost"})
        }
    }

    render() {
        let currComponent = null;
        if (this.state.status === "initial") {
            currComponent = <div>
                <h1>Welcome to Trivia Game!</h1>
                <br/>
                <button className="initial-btn" onClick={this.changeToHomepage}>Back</button>
                <button className="initial-btn" id="initial-play-btn"  onClick={this.startGame}>Play</button>
            </div>
        }
        else if(this.state.status === "playing") {
            let currQuestion = this.state.questions[this.state.currentQuestionIndex];
            currComponent = <div>
                <h1>{currQuestion["question"]}</h1>
                <button className="ans-btn" onClick={() => {this.checkAnswer(0)}}>{currQuestion["choices"][0]}</button>
                <button className="ans-btn" onClick={() => {this.checkAnswer(1)}}>{currQuestion["choices"][1]}</button>
                <button className="ans-btn" onClick={() => {this.checkAnswer(2)}}>{currQuestion["choices"][2]}</button><br/>
                <button className="ans-btn" onClick={() => {this.checkAnswer(3)}}>{currQuestion["choices"][3]}</button>
            </div>
        }
        else if(this.state.status === "lost") {
            currComponent = <div>
                <h1>Sorry :(, you lost....</h1>
                <button className="initial-btn" onClick={this.changeToHomepage}>Back to homepage</button>
                <button className="initial-btn" id="initial-play-btn"  onClick={this.startGame}>Try again?</button>
            </div>
        }
        

        return  (
            <Container fluid id="trivia-container">
                {currComponent}
            </Container>
        );
    }
}
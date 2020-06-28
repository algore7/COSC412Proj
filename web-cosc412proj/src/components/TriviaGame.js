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

    componentDidMount() {
        fetch("http://localhost:8000/api/trivia_questions")
        .then(res => res.json())
        .then(result => {
            let resultQuestions = [];
            for(let question of result) {
                question["choices"] = [question["answer"], ...(question["falseAnswers"]).split(",")];

                //shuffle
                let shuffleInt = Math.floor(Math.random() * Math.floor(100));
                let startIndex = 0;
                let i = 0;
                while(i < shuffleInt){
                    if (startIndex + 1 == question["choices"].length) {
                        startIndex = 0;
                    }
                    let temp = question["choices"][startIndex];
                    question["choices"][startIndex] = question["choices"][startIndex+1];
                    question["choices"][startIndex+1] = temp;
                    startIndex++;
                    i++;
                }
                resultQuestions.push(question);
            }
            this.setState({questions: resultQuestions});
            console.log(this.state.questions);
        });
    }

    changeToHomepage = () => {
        this.props.onComponentChange("homepage", "white");
    }

    startGame = () => {
        this.setState({
            status: "playing"
        });
    }

    checkAnswer = (number) => {
        let currQuestion = this.state.questions[this.state.currentQuestionIndex];
        if(currQuestion["choices"][number] === currQuestion["answer"]) {
            let nextNumber = this.state.currentQuestionIndex + 1;
            if (nextNumber === this.state.questions.length) {
                this.setState({status: "won"});
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
                <button onClick={() => {this.checkAnswer(0)}}>{currQuestion["choices"][0]}</button>
                <button onClick={() => {this.checkAnswer(1)}}>{currQuestion["choices"][1]}</button>
                <button onClick={() => {this.checkAnswer(2)}}>{currQuestion["choices"][2]}</button><br/>
                <button onClick={() => {this.checkAnswer(3)}}>{currQuestion["choices"][3]}</button>
            </div>
        }
        

        return  (
            <Container fluid id="trivia-container">
                {currComponent}
            </Container>
        );
    }
}
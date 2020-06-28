import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TriviaGame from './components/TriviaGame';
import Homepage from './components/Homepage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "homepage"
    }
  }

  componentDidMount() {
    document.title = "Website Name";
  }

  changeCurrentComponent = (newComponentName) => {
    this.setState({currentComponent: newComponentName});
  }

  render() {
    let currentComponent = <Homepage/>;
    if (this.state.currentComponent === "homepage")
      currentComponent = <Homepage onComponentChange={this.changeCurrentComponent}/>
    else if(this.state.currentComponent === "trivia")
      currentComponent = <TriviaGame onComponentChange={this.changeCurrentComponent}/>
    return (
      <div className="App">
          {currentComponent}
      </div>
    );
  }
}

export default App;

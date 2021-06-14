import React, { Component } from "react";
import "./App.css";
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";
import LogComponent from "./components/LogComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      result: "",
      calcLog: [],
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      var answer = (eval(checkResult) || "") + "";
      this.setState({
        // eslint-disable-next-line
        result: answer,
      });
      this.updateLog(checkResult, answer);
    } catch (e) {
      alert("Error");
      this.setState({
        result: "",
      });
    }

    // eval errors if string is invalid
    // This could also be used to update status of the equals button. If eval can't be performed on string without error then equals button remains disabled
    // Usability wise it is better to check on entry to validate input, js performance wise it is more efficient to display an error message
    // https://stackoverflow.com/questions/46977962/eval-is-not-calculate-if-zero-before-the-number
    // math js would strip out 00, 000, 01 etc. Could use parseFloat but not dealing with single values
  };

  updateLog = (result, answer) => {
    this.setState({
      calcLog: [...this.state.calcLog, result + " = " + answer],
    });
  };

  handleChange(e) {
    const re = /^[\d\+\/\*\.\- \(\)]*$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ result: e.target.value });
    }
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      this.calculate();
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body" onKeyPress={this.handleKeyPress}>
          <h1>Calculator</h1>
          <ResultComponent {...this.state} handleChange={this.handleChange} />
          {<KeyPadComponent onClick={this.onClick} />}
          <LogComponent {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;

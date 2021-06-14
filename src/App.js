import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)

        this.state = { result: ""}
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','-')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
          alert('Error');  
          this.setState({
                result: ""
            })

        }
    };

    handleChange(e){
      const re = /^[\d\+\/\*\.\- \(\)]*$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         this.setState({ result: e.target.value })
      }
   }

   handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
      this.calculate();
    }
  }

    reset = () => {
        this.setState({
            result: ""
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body" onKeyPress={this.handleKeyPress}>
                    <h1>Calculator</h1>
                    <ResultComponent {...this.state} handleChange = {this.handleChange}/>
                    {/* <KeyPadComponent onClick={this.onClick}/> */}
                </div>
            </div>
        );
    }
}

export default App;

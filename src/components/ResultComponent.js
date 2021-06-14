import React, {Component} from 'react';

class ResultComponent extends Component {

    constructor(props){
        super(props);
     }

     render(){
        return  (
        <div>
            <label>Result:</label>
            <input className="result" title="Insert calculation here and press Enter to obtain result" value={this.props.result} onChange={this.props.handleChange}/>
        </div>
        )
      }
}

export default ResultComponent;


import React, {Component} from 'react';

class ResultComponent extends Component {

    constructor(props){
        super(props);
     }

     render(){
        return  (
        <div>
            <input value={this.props.result} onChange={this.props.handleChange}/>
        </div>
        )
      }
}


export default ResultComponent;


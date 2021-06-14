import React, {Component} from 'react';

class LogCompontent extends Component {
    
    constructor(props){
        super(props);
     }
    render() {
        return (
            
            <div className="calculation-log">
                <h2>Previous Calculations</h2>
                <div className="log">
                    <ul>
                        {this.props.calcLog.map(item => (<li >{item}</li>))} 
                    </ul>
                </div>
            </div>
        );
    }
}

export default LogCompontent;

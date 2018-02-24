import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();

    this.state = {
        number1: 0,
        number2: 0,
        sum: null
        }    
    }

    handleChange1(val) {
        this.setState( { number1: parseInt(val, 10) } );
    }
    handleChange2(val) {
        this.setState( { number2: parseInt(val, 10) } );
    }
    add(num1, num2) {
        this.setState( { sum: num1 + num2 } );
    }

    render () {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" onChange={ (event) => this.handleChange1(event.target.value) }></input>
                <input className="inputLine" onChange={ (event) => this.handleChange2(event.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
                <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}

export default Sum;
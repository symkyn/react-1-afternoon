import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super()

        this.state={
            userInput1: 0,
            userInput2: 0,
            sum: 0,
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Sum</h4>
                <input 
                        type='number'
                        className="inputLine"
                        onChange={(event) => this.handleChange1(event)}
                        value={this.state.userInput1} />
                <input 
                        type='number'
                        className="inputLine"
                        onChange={(event) => this.handleChange2(event)}
                        value={this.state.userInput2} />
                <button className="confirmationButton" onClick={() => this.sum()}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )

    }

    handleChange1(event) {
        this.setState({
            userInput1: event.target.value,
        })
    }

    handleChange2(event) {
        this.setState({
            userInput2: event.target.value,
        })
    }

    sum() {
        this.setState({
            sum: +this.state.userInput1 + +this.state.userInput2,
        })
    }

}

export default Sum
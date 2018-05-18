import React, { Component } from 'react';

class EvenAndOdd extends Component {
    
    constructor () {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
     
    }

    


    render() {

        // const newEvenArray = this.state.evenArray.map((e, i) => 
        //     (<li key={`evenArray ${i}`}>{e}, </li>))
        // const newOddArray = this.state.oddArray.map((e, i) => 
        // (<li key={`oddArray ${i}`}>{e}, </li>))

        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>
                    Evens And Odds
                </h4>
                <input 
                        className="inputLine" 
                        onChange={e => this.handleChange(e)} 
                        value={this.state.userInput}
                        > 

                </input>
                <button className="confirmationButton" onClick={() => this.assignInput(this.state.userInput)}>
                    split
                </button>
                <span className="resultBox">
                    Evens: {this.state.evenArray.toString()}
                </span>
                <span className="resultBox">
                    Odds: {this.state.oddArray.toString()}
                </span>
            </div>
        )

    }

    handleChange(e) {
        this.setState({userInput: e.target.value});
    }

    assignInput(userInput) {
        let splitString = userInput.split(',');
        let evens = [];
        let odds = [];

        for(var i=0; i<splitString.length; i++){
            if(splitString[i] % 2 ===0){
                evens.push(parseInt(splitString[i], 10));
            } else {
                odds.push(parseInt(splitString[i], 10));
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds,
            userInput: '',
        })
    }
    
}

export default EvenAndOdd
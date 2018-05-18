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
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>
                    Evens And Odds
                </h4>
                <input className="inputLine" onChange={(e) => (handleChange(e))} > 

                </input>
                <button className="confirmationButton">

                </button>
                <span className="resultBox">

                </span>
                <span className="resultBox">

                </span>
            </div>
        )

    }

    handleChange(e) {
        this.setState({userInput: e.target.value});
    }
    
}

export default EvenAndOdd
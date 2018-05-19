import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super()

        this.state={
            userInput: '',
            palindrome: '',
        }
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input 
                        className="inputLine"
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.userInput} />
                <button className="confirmationButton" onClick={() => this.checkPalindrome()}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )

    }

    handleChange(event){
        this.setState({
            userInput: event.target.value,
        })
    }

    checkPalindrome(){
        let checkValue = this.state.userInput.split('');
        let stringLength = checkValue.length - 1;
        let trueOrFalse = 'true';

        for(var i = 0; i < checkValue.length; i++){
            if(!(checkValue[i] === checkValue[stringLength-i])){
                trueOrFalse = 'false';
            }
        }

        this.setState({
            userInput: '',
            palindrome: trueOrFalse,
        })
    }

}

export default Palindrome
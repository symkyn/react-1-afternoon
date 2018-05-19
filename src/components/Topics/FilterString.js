import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super()

        this.state= {
                unFilteredArray: [
                    'Gloomhaven', 'Pandemic Legacy', 'Through the Ages', 'Twilight Struggle', 'Terraforming Mars',
                ],
                userInput: '',
                filteredArray: [],
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input 
                        className="inputLine" 
                        onChange={(event) => this.updateUserInput(event)} 
                        value={this.state.userInput} />
                <button className="confirmationButton" onClick={() => this.filterArray()}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )

    }

    updateUserInput(event) {
        this.setState({
            userInput: event.target.value,
        })
    }

    filterArray() {
        let games = this.state.unFilteredArray;
        let array = [];
        for(var i = 0; i < games.length; i++){
            if(games[i].includes(this.state.userInput)){
                array.push(games[i]);
            }
        }

        this.setState({
            userInput: '',
            filteredArray: array,
        })
    }

}

export default FilterString
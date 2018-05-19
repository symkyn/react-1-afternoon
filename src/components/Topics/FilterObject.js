import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super()

        this.state= {
                unFilteredArray: [
                    {title: 'Brass', minPlayerCount: 3, maxPlayerCount: 4, length: '2 hours'},
                    {title: 'Teraforming Mars', minPlayerCount: 1, maxPlayerCount: 5, length: '2 hours'},
                    {title: 'Gaia Project', minPlayerCount: 2, maxPlayerCount: 4, bggRank: 42}
                ],
                userInput: '',
                filteredArray: [],
        }
    }


    render() {
        return (
           
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input 
                        className='inputLine' 
                        onChange={(event) => this.updateUserInput(event)} 
                        value={this.state.userInput}/>
                <button 
                        className='confirmationButton' onClick={() => this.filterArray()}>
                            Filter
                        </button>
                <span className='resultsBox filterObjectPB'>Filtered: {JSON.stringify(this.state.filteredArray,null,10)}</span>
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
            if(games[i].hasOwnProperty(this.state.userInput)) {
                array.push(games[i])
            }
        }

        this.setState({
            userInput: '',
            filteredArray: array,
        })
    }

}

export default FilterObject
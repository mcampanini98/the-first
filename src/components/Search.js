import React, {Component} from 'react';

class Search extends Component{
    render(){
        /*Solo a manera decorativa (por ahora) */
        return(
            <div id="App-search">
                <input type="text" placeholder="Buscador"/>
                <button type="click">buscar</button>
            </div>
        )
    }
}

export default Search;
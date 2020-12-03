import React from 'react'

//My Imports
// import { searchBar } from '../style';

const SearchBar = (props) => {
    return (
        <div>
           
            <input
                placeholder='Search a city..'
                onChangeText={(text) => props.onChangeText(text)}
            />
        </div>
    )
}

export { SearchBar }
import { IconSearch } from 'assets/imgs';
import React from 'react';

const SearchBar = () => {
    return (
        <div className="w-full search_bar relative">
            <img src={IconSearch} alt='search icon' />
            <input
                type="text" id="simple-search" placeholder="Search"
                className="w-full search_input ml-3 outline-none"
            />
        </div>
    );
}

export default SearchBar;

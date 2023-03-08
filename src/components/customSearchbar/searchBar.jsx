import { IconSearch } from 'assets/imgs';
import React from 'react';

const SearchBar = ({ isIcon = true, placeholder = 'Search', className, ...props }) => {
    return (
        <div className="w-full search_bar relative">
            {isIcon && <img src={IconSearch} alt='search icon' />}
            <input
                type="text" id="simple-search" placeholder={placeholder}
                className="w-full search_input ml-3 outline-none"
            />
        </div>
    );
}

export default SearchBar;

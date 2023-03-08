import SearchBar from 'components/customSearchbar/searchBar';
import React from 'react';

const OutputSidebar = () => {
    return (
        <div>
            <SearchBar isIcon={false} placeholder='How does the reduction in inflation next year affect valuations' />

            <div className='m-4'>
                <div className='research-outline-card'>
                    <textarea type='textarea' className='_input w-full' value='How does the macroeconomic environment affect valuations of tech scaleups?' />
                </div>
            </div>
        </div>
    );
}

export default OutputSidebar;

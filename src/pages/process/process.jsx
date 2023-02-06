import SearchBar from 'components/customSearchbar/searchBar';
import PageHeader from 'components/page_header/pageHeader';
import React from 'react';
import CircleProgressbar from './components/circleProgressbar';
import './style.scss';

const Process = () => {
    return (
        <>
            <PageHeader
                title="Process"
            />
            <div className='px-5'>
                <SearchBar />
                <CircleProgressbar />
            </div>
        </>
    );
}

export default Process;

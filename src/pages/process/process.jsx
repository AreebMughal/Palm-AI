import Card from 'components/card/customCard';
import SearchBar from 'components/customSearchbar/searchBar';
import Header from 'components/page_header/header';
import PageHeader from 'components/page_header/pageHeader';
import React from 'react';
import FileViewer from 'react-file-viewer';
import Step from './components/step';
import './style.scss';

const Process = () => {
    return (
        <>
            <PageHeader
                title="Process"
            />
            <div className='px-5'>
                <SearchBar />
                <Step />
            </div>
        </>
    );
}

export default Process;

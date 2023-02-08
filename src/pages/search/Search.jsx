import React, { useEffect, useState } from 'react';
import Card from '../../components/card/customCard';
import Header from 'components/page_header/header';
import SearchBar from 'components/customSearchbar/searchBar';
import './style.scss';
import SelectedData from './components/selectedData';
import DatasetMultiSelect from './components/MultiSelect';
import Multi from './components/multi';
import PageHeader from 'components/page_header/pageHeader';
import Explore from './components/explore';
import Outcome from './components/outcome';

const Search = () => {
    const [suggestedDataset, setSuggestedDataset] = useState([]);

    const datasetSelectHandler = (dataset) => {
        // let newSelectedDataset = [...suggestedDataset];
        // newSelectedDataset.push(dataset);
        // setSuggestedDataset(newSelectedDataset)
        setSuggestedDataset(dataset)
    }
    return (
        <>
            <PageHeader
                title="Search"
            />
            <div className='px-5'>
                <SearchBar />
                <Header title='Selected Data' />
                <SelectedData />
                <div className='flex flex-wrap mt-3'>
                    <div className='min'>
                        <Header title='Suggested Datasets' />
                        <DatasetMultiSelect
                            datasetSelectHandler={(value) => datasetSelectHandler(value)}
                        />
                        {/* <Multi /> */}
                        <Header title='Dataset Selected' />
                        {suggestedDataset?.length > 0 ? suggestedDataset?.map(item => {
                            return (
                                <Card
                                    key={item.value}
                                    title={item.label}
                                />
                            );
                        }) :
                            <Card
                                title={'No Dataset selected'}
                            />
                        }

                    </div>
                    <div className=' mt-2'>
                        <div className='side_card px-5 py-1'>
                            <Header title='Proceed to training your data' class='side_card_header mb-2' />
                            <p className='side_card_text'>
                                Lorem ipsum dolor sit amet consectetur. Venenatis lectus vestibulum id aliquam aliquam id nibh.
                            </p>
                            <div className='side_card_button mt-10 mb-4'>
                                Train Data
                            </div>
                        </div>
                    </div>
                </div>
                <Header title='Outcome Required' />
                <Outcome />

                {/* <div onChange={ }>
                <input type="radio" value="MALE" name="gender" /> Male
                <input type="radio" value="FEMALE" name="gender" /> Female
            </div> */}
                {/* <SearchBar />
            
            <Card title='Company Valuations and Investment' icon={svgCardImg} /> */}
                {/* <div className='grid grid-cols-4'>
                <Card title='Company Valuations and Investment' icon={IconGraph} />
                <Card title='Mapping Competitor' icon={IconCricleShop} />
                <Card title='Macroeconomics Dataset' icon={IconPieChart} />

            </div>
            <div className='flex flex-wrap'>
                <div className='w-2/3'>
                    <Header title='Suggested Datasets' />
                    <Card
                        title='Housing Transaction - monthly by postcode'
                        class='h-20 border-gray-300  border text-blue-600 bg-white rounded-md m-3'
                    />
                    <Card
                        title='Housing Transaction - monthly by postcode'
                        class='h-20 border-gray-300  border text-blue-600 bg-white rounded-md m-3'
                    />
                </div>
                <div className='w-1/3 mt-2'>
                    <div className='w-full bg-white shadow-slate-500 shadow-lg p-4 rounded-md mb-3 mt-3'>
                        <Header title='Proceed to training your data' />
                        <p className='text-gray-400 mb-5'>
                            Lorem ipsum dolor sit amet consectetur. Venenatis lectus vestibulum id aliquam aliquam id nibh.
                        </p>
                        <div className='py-2 bg-green-500 mx-5 text-center text-white font-medium text-base rounded-md'>
                            Train Data
                        </div>
                    </div>
                </div>
            </div>
            <Header title='Outcome Required' />
            <Card
                title='Effect of Macroeconomic Environment on UK Scaling Tech Company Valuations 2018-2028'
                class='h-20 border-gray-300 border text-black bg-white rounded-md m-3'
            /> */}
            </div>
        </>
    );
}

export default Search;

import Header from 'components/page_header/header';
import React from 'react';
import ExploreCard from './exploreCard';
import { IconInvestment, IconPeople, IconInternational, IconImpact, IconValuation, IconMarketMapping, IconBenefits, IconBenchmark } from 'assets/imgs';
import SearchBar from 'components/customSearchbar/searchBar';
import PageHeader from 'components/page_header/pageHeader';

const detail = 'Lorem ipsum dolor sit amet consectetur. Sapien diam netus arcu eget senectus dolor non. Fermentum nisi quam venenatis sodales amet lobortis metus curabitur odio.';

const Explore = () => {

    const explore = [
        { id: 1, icon: IconInvestment, header: 'Investment', detail: detail },
        { id: 2, icon: IconPeople, header: 'People', detail: detail },
        { id: 3, icon: IconInternational, header: 'International', detail: detail },
        { id: 4, icon: IconImpact, header: 'Impact', detail: detail },
    ];

    const popularDataset = [
        { id: 1, icon: IconValuation, header: 'Company Valuations and Investment', detail: detail },
        { id: 2, icon: IconBenefits, header: 'Salary & Benefits Benchmarks', detail: detail },
        { id: 3, icon: IconBenchmark, header: 'Territory Benchmarking', detail: detail },
        { id: 4, icon: IconMarketMapping, header: 'Competition and Market Mapping', detail: detail },
    ];

    return (
        <>
            <PageHeader
                title="Search"
            />
            <div className='px-5'>
                <SearchBar />
                <Header title={'Explore'} />
                <div
                    className='grid max-sm:grid-cols-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-2 2xl:grid-cols-10 '
                // className='flex flex-wrap'
                >
                    {explore.map((item, index) => {
                        return (
                            <ExploreCard
                                key={item.id}
                                icon={item.icon}
                                header={item.header}
                                detail={item.detail}
                            />
                        );
                    })}
                </div>
                <Header title={'Popular Datasets'} />
                <div
                    className='grid max-sm:grid-cols-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-2 2xl:grid-cols-10 '
                // className='flex flex-wrap'
                >
                    {popularDataset.map((item, index) => {
                        return (
                            <ExploreCard
                                key={item.id}
                                icon={item.icon}
                                header={item.header}
                                detail={item.detail}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Explore;

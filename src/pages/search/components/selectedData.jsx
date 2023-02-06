import React, { useEffect, useState } from 'react';
import { IconGraphPng, IconCircleShopPng, IconPieChartPng } from 'assets/imgs';

const SelectedData = () => {
    const [dataset, setDataset] = useState('');

    const data = [
        { icon: IconGraphPng, title: 'Company Valuations and Investment', id: 1 },
        { icon: IconCircleShopPng, title: 'Mapping Competitor', id: 2 },
        { icon: IconPieChartPng, title: 'Macroeconomics Dataset', id: 3 },
    ];

    const cardClickHandler = (e) => {
        setDataset(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className='flex flex-wrap'>
            {
                data.map(item => {
                    return (
                        <label className='cursor-pointer mt-3 mr-3'
                            key={item.id}
                            onChange={cardClickHandler}
                        >
                            <input type='radio' className='hidden radio' name='dataset' value={item.id} />
                            <div className={`_search_page_card card_active`}>
                                <span className='h-full w-full m-auto flex align-middle items-center pl-3'>
                                    <img src={item.icon} alt='icon' width='40' height='40' />
                                    <div className='_search_page_card_text ml-3'>
                                        {item.title}
                                    </div>
                                </span>
                            </div>
                        </label>
                    );
                })
            }
        </div>
    );
}

export default SelectedData;

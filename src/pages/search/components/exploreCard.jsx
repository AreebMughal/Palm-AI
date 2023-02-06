import { IconInvestment } from 'assets/imgs';
import React from 'react';

const ExploreCard = (props) => {
    return (
        <div className='explore_card col-span-2 mt-3 mr-3 lg:col-span-2'>
            <div className='_img_box'>
                <img src={props.icon} className={'m-auto flex align-middle items-center'} alt={'investment icon'} />
            </div>
            <div className='_header'>{props.header}</div>
            <div className='_text'>
                {props.detail}
            </div>

        </div>
    );
}

export default ExploreCard;

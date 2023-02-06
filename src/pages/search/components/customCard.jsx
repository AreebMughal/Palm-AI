import React from 'react';

const Card = (props) => {
    let classes = props.class || 'dataset_card';
    classes += ' mt-3 mr-3';
    // classes += props.isActive ? ' card_active' : ''

    return (
        <div className={classes} >
            <div className='h-full w-full m-auto flex align-middle items-center pl-3'>
                <div className=' ml-3'>
                    {props.title}
                </div>
            </div>
        </div>
    );
}

export default Card;

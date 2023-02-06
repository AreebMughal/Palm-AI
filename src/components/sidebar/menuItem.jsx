import React from 'react';

const MenuItem = (props) => {
    return (
        <div className='menu_item hover:cursor-pointer' onClick={props.onClick}>
            <img src={props.icon} alt='menu icon' />
            <span className='_text hover:cursor-pointer'>
                {props.title}
            </span>
            {props.counter &&
                <span className='badge_counter badge_text'>
                    {props.counter}
                </span>
            }
        </div>
    );
}

export default MenuItem;

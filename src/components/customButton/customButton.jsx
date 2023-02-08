import React from 'react';
import './style.scss';

const CustomButton = ({ btnClass, onClick, ...props }) => {
    return (
        <div
            className={`default_button default_button_text ${btnClass}`}
            onClick={props.onClick}
        >
            {/* <span className='default_button_text'> */}
            {props.children}
            {/* </span> */}
        </div>
    );
}

export default CustomButton;

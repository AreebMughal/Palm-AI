import React from 'react';
import './style.scss';

const CustomButton = (props) => {
    return (
        <div
            className={props.class || 'btn default_button'}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
}

export default CustomButton;

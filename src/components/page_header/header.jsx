import React from 'react';

const Header = (props) => {
    return (
        <div className={`${props.class || 'header'} mt-5`}>
            {props.title}
        </div>
    );
}

export default Header;

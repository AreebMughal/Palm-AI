import React from 'react';
import './style.scss';


const PageHeader = (props) => {
    return (
        <div className='page_header'>
            <div className='page_header_text'>
                {props.title}
            </div>
            {/* <div className=''>
                <ProfileMenu />
            </div> */}
        </div>
    );
}

export default PageHeader;

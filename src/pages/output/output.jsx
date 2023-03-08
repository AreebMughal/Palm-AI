import React from 'react';
import OutputSidebar from './components/outputSidebar';

const Output = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3 border-2 border-black'>
                <OutputSidebar />
            </div>

        </div>
    );
}

export default Output;

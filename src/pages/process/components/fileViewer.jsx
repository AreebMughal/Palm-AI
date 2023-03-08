import CustomButton from 'components/customButton/customButton';
import React from 'react';
// import DocViewer from 'react-doc-viewer';

const FileViewer = () => {
    const docs = [{ uri: require("../../../assets/Rizwan_Resume.pdf") }]
    return (
        <>
            <div className='file-viewer-bar w-full relative'>
                <span className='h-full flex items-center ml-4 file-viewer-txt'>How your data might look</span>
                <div className='absolute top-0 right-0 mt-2 mr-3'>
                    <CustomButton btnClass={'file-viewer-btn'}>
                        Edit
                    </CustomButton>
                </div>
            </div>
            {/* <DocViewer documents={docs} /> */}
        </>
    );
}

export default FileViewer;

import React, { useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';

const options = [
    { value: 1, label: "Housing transactions - monthly by postcode" },
    { value: 2, label: "Competitor performance mapping" },
];


const DatasetMultiSelect = (props) => {
    const [suggestedDataset, setSuggestedDataset] = useState(null);

    const handleChange = (value) => {
        // console.log(value);
        setSuggestedDataset(value);
        // props.datasetSelectHandler(value[0]);
        props.datasetSelectHandler(value);

    };

    // useEffect(() => {
    //     console.log(suggestedDataset?.length);
    //     console.log();
    // }, [suggestedDataset]);


    return (
        <div className='mt-4 mr-4'>
            <Select
                // value={null}
                value={suggestedDataset}
                onChange={handleChange}
                options={options}
                isMultiple={true}
                isSearchable={true}
                isClearable={true}
                noOptionsMessage={'No option found'}
                placeholder={'Select suggested Dataset...'}
            />
        </div>
    );
}

export default DatasetMultiSelect;

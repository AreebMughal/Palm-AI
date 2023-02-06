import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { IconDataset } from 'assets/imgs';
import Multiselect from 'multiselect-react-dropdown';


const options = [
    { id: 1, name: "Housing transactions - monthly by postcode" },
    { id: 2, name: "Competitor performance mapping" },
];

// const c = {
//     boxSizing: 'border-box',
//     width: '739px',
//     height: '80px',

//     background: '#ffffff',
//     border: '1px solid #dfe3e8',
//     borderRadius: '2px',
//     fontFamily: '"Roboto"',
//     fontStyle: 'normal',
//     fontWeight: '400',
//     fontSize: '16px',
//     lineHeight: '20px',
//     color: '#5a21ec',
//     /* identical to box height, or 125% */

//     /* Purple */
// }

// const style = {
//     "chips": {

//         display: 'hidden'
//         // border: '1px solid black'
//     },
//     "searchBox": c,
//     "multiselectContainer": {
//         "color": "red"
//     }
// }
const Multi = () => {
    const [selected, setSelected] = useState([]);

    return (
        <div>
            {/* <Multiselect
                options={options} // Options to display in the dropdown
                className=''
                style={style}

                selectedValues={null} // Preselected value to persist in dropdown
                // onSelect={onSelect} // Function will trigger on select event
                // onRemove={onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
            /> */}
        </div>
    );
}

export default Multi;

import React from 'react';
import Header from 'components/page_header/header';
import Card from 'components/card/customCard';
import CustomButton from 'components/customButton/customButton';
import SelectedData from 'pages/search/components/selectedData';

const options = [
    { id: 1, title: 'Investment Types' },
    { id: 2, title: 'Mergers and Aquisitions' },
];
const StepSidebar = ({ step, ...props }) => {

    return (
        <>
            {step === 'Train' &&
                <>
                    <Header title='Data you might want to also add' class='mb-5 side_header' />
                    {options.map((item, index) => {
                        return (
                            <Card
                                key={item.id}
                                class='_option'
                                title={item.title}
                                textClass='ml-0'
                            />
                        );
                    })}
                </>
            }
            {step === 'Evaluate' &&
                <>
                    <CustomButton btnClass={'mt-4'}>
                        Accept
                    </CustomButton>
                    <CustomButton btnClass={'process-sidebar-btn mt-3'}>
                        Retrain Model
                    </CustomButton>
                    <CustomButton btnClass={'process-sidebar-btn mt-3'}>
                        Ask for Validation
                    </CustomButton>
                    <div className='mt-10 '>
                        <Header title='Data Sources' />
                        <SelectedData />
                    </div>
                </>
            }
        </>
    );
}

export default StepSidebar;

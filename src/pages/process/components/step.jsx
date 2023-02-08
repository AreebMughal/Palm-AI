import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import CircleProgressbar from './circleProgressbar';
import MultiStepProgressBar from './multiStepProgressBar';
import StepSidebar from './stepSidebar';

const steps = [
    {
        title: 'Train',
        content: <CircleProgressbar />,
        stepInfo: '2 hours and 31 minutes remaining evaluate...'
    },
    {
        title: 'Evaluate',
        content: 'Second-content',
        stepInfo: 'Completed'
    },
    {
        title: 'Accept',
        content: 'Last-content',
        stepInfo: 'Accepted'
    },
];
const Step = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };


    return (
        <>
            <div className='step-info mt-3 mb-2'>{steps[current].stepInfo}</div>
            <MultiStepProgressBar page={current} />
            <div className='my-2 grid grid-cols-12'>
                <div className='process-main-card flex justify-center items-center mt-3 mr-3 col-span-8 '>
                    {steps[current].content}
                </div>
                <div className='process-side-card py-0 px-4 mt-3 col-span-4 max-md:col-span-8 max-sm:col-span-8'>
                    <StepSidebar step={steps[current].title} />
                </div>
            </div>
            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};
export default Step;
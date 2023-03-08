import { Progress } from 'antd';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgressbar = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <Progress
                type="circle"
                percent={40}
                strokeWidth={8}
                width={100}
                strokeColor={'#5A21EC'}
                format={(percent) =>
                    <span>
                        <span className='progress-text'>Training</span><br />
                        <span className='progress-percent'>{percent}%</span>
                    </span>
                }
            />
        </div>
    );
}

export default CircleProgressbar;

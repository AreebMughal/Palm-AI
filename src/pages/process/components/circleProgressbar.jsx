import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

const CircleProgressbar = () => {
    return (
        // <CircularProgressbar
        //     value={percentage}
        //     text={`Training \n\n
        //     ${percentage}%`}
        //     styles={{
        //         // Customize the root svg element
        //         root: {},
        //         // Customize the path, i.e. the "completed progress"
        //         path: {
        //             // Path color
        //             stroke: `rgba(62, 152, 199, ${percentage / 100})`,
        //             // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        //             strokeLinecap: 'butt',
        //             // Customize transition animation
        //             transition: 'stroke-dashoffset 0.5s ease 0s',
        //             // Rotate the path
        //             transform: 'rotate(0.25turn)',
        //             transformOrigin: 'center center',
        //         },
        //         // Customize the circle behind the path, i.e. the "total progress"
        //         trail: {
        //             // Trail color
        //             stroke: '#d6d6d6',
        //             // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        //             strokeLinecap: 'butt',
        //             // Rotate the trail
        //             transform: 'rotate(0.25turn)',
        //             transformOrigin: 'center center',
        //         },
        //         // Customize the text
        //         text: {
        //             // Text color
        //             fill: '#f88',
        //             // Text size
        //             fontSize: '16px',
        //         },
        //         // Customize background - only used when the `background` prop is true
        //         background: {
        //             fill: '#3e98c7',
        //         },
        //     }}
        // />
        <div class="set-size charts-container">
            <div class="pie-wrapper progress-10">
                <span class="label">10<span class="smaller">%</span></span>
                <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
            </div>

            <div class="pie-wrapper progress-60">
                <span class="label">60<span class="smaller">%</span></span>
                <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
            </div>

            <div class="pie-wrapper progress-90">
                <span class="label">90<span class="smaller">%</span></span>
                <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
            </div>

            <div class="pie-wrapper progress-45 style-2">
                <span class="label">45<span class="smaller">%</span></span>
                <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
                <div class="shadow"></div>
            </div>

            <div class="pie-wrapper progress-75 style-2">
                <span class="label">75<span class="smaller">%</span></span>
                <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
                <div class="shadow"></div>
            </div>

            <div class="pie-wrapper progress-95 style-2">
                <span class="label">95<span class="smaller">%</span></span>
                <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
                <div class="shadow"></div>
            </div>

            <div class="pie-wrapper pie-wrapper--solid progress-65">
                <span class="label">65<span class="smaller">%</span></span>
            </div>

            <div class="pie-wrapper pie-wrapper--solid progress-25">
                <span class="label">25<span class="smaller">%</span></span>
            </div>

            <div class="pie-wrapper pie-wrapper--solid progress-88">
                <span class="label">88<span class="smaller">%</span></span>
            </div>
        </div>
    );
}

export default CircleProgressbar;

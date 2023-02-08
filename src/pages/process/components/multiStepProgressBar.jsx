import React from "react";
// import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
    var stepPercentage = 0;
    if (page === 0) {
        stepPercentage = 0;
    } else if (page === 1) {
        stepPercentage = 50;
    } else if (page === 2) {
        stepPercentage = 100;
    }
    // else if (page === "pagefour") {
    //     stepPercentage = 100;
    // } 
    else {
        stepPercentage = 0;
    }
    const txtClass = 'pt-5';
    return (
        <div className="progressbar mx-2">
            <ProgressBar percent={stepPercentage}>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`h-24 w-24 indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <span className={`progress-text ${txtClass} pl-5`}>Train</span>
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`h-24 indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <span className={`progress-text ${txtClass}`}>Evaluate</span>
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }) => (
                        <div
                            className={`h-24 w-24 indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <span className={`progress-text ${txtClass} mr-6`}>Accept</span>
                        </div>
                    )}
                </Step>
            </ProgressBar>
        </div>
    );
};

export default MultiStepProgressBar;

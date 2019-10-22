import React from 'react';
import styled from 'styled-components';

export const calculatePercentageProgressBar = (progress, startingPoint) => {
    let finalPercent = Number(progress) / Number(startingPoint) * 100;
    const digitCount = Math.log(finalPercent) * Math.LOG10E + 1 | 0;  // for positive integers

    // console.log("calcPercentageProgressBar variables  ", progress, startingPoint, finalPercent, digitCount);

    // if (typeof finalPercent === "NaN") return finalPercent = "0%";
    // if (finalPercent < 1) return finalPercent = "0%";
    if (digitCount === 3) return `${finalPercent}%`;
    if (digitCount === 2) return `${finalPercent.toPrecision(3)}%`;
    if (digitCount === 1) return `${finalPercent.toPrecision(2)}%`;
    if (digitCount === 0) return `<1%`;
};

const ProgressBar = props => {
    const { progress, startingPoint } = props;
    const regex = /,/gi;
    let newProgress = progress

    
    if (typeof newProgress === "string") {
        let removedChar = newProgress.replace(regex, "")
        let cleanNumber = parseInt(removedChar);
        newProgress = cleanNumber;
    }
    
    // console.log("progress bar props ",props, "\n", newProgress)

    const percent = Number(newProgress) / Number(startingPoint) * 100;
    

    const Box = styled.div`
        height: 12px;
        border-radius: 50px;
        transition: 1s ease;
        width: ${newProgress > startingPoint ? 100 : percent}%;
        animation: ${percent >= 100 ? '1s ease-out pulse;' : '1s ease-out pulse, progress-bar-stripes 1s linear infinite;'};
        filter: brightness(120%);
        @keyframes pulse {
            0% {
                width: 0;
                background: $erudite-purple;
            }
            100% {
                /* width: ${newProgress > startingPoint ? "100" : percent}%; */
            }
        };
        @keyframes progress-bar-stripes {
            from  { background-position: 40px 0; }
            to    { background-position: 0 0; }
        };
    `

    

    return (
        <div className={percent < 100 ? "progress-bar" : percent === NaN ? "progress-bar empty" : "progress-bar full"} >
            <Box />
        </div> 
    );
}


export default ProgressBar;




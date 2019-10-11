import React from 'react';
import styled from 'styled-components';

export const calculatePercentageProgressBar = (progress, startingPoint) => {
    const finalPercent = Number(progress) / Number(startingPoint) * 100;
    const digitCount = Math.log(finalPercent) * Math.LOG10E + 1 | 0;  // for positive integers
    if (digitCount === 3) return `${finalPercent}%`;
    if (digitCount === 2) return `${finalPercent.toPrecision(3)}%`;
    if (digitCount === 1) return `${finalPercent.toPrecision(2)}%`;
};

const ProgressBar = ({progress, startingPoint}) => {
    
    const percent = Number(progress) / Number(startingPoint) * 100;
    // const brightness = percent < 50 ? percent / 100 * 3 : percent >= 100 ? 4 : percent / 100 * 2;
    // /* filter: brightness(${brightness}); */

    const Box = styled.div`
        height: 12px;
        border-radius: 50px;
        transition: 1s ease;
        width: ${progress > startingPoint ? 100 : percent}%;
        animation: ${percent >= 100 ? '1s ease-out pulse;' : '1s ease-out pulse, progress-bar-stripes 1s linear infinite;'};
        filter: brightness(120%);
        @keyframes pulse {
            0% {
                width: 0;
                background: $erudite-purple;
            }
            100% {
                width: ${progress > startingPoint ? "100" : percent}%;
            }
        };
        @keyframes progress-bar-stripes {
            from  { background-position: 40px 0; }
            to    { background-position: 0 0; }
        };

    `

    return (
        <div className={percent < 100 ? "progress-bar" : "progress-bar full"} >
            <Box />
        </div> 
    );
}


export default ProgressBar;




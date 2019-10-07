import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


// <div
// className={className}
// style={{ ...style, display: "block"}}
// onClick={onClick}
// >
// <FaAngleRight />
// </div>


export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className="slick-arrow-container">
            <FaAngleRight 
                className={className}
                onClick={onClick}
                style={{ ...style, display: "flex"}}
            />
        </div>
    );
}

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className="slick-arrow-container">
            <FaAngleLeft 
                className={className}
                onClick={onClick}
                style={{ ...style, display: "flex"}}
            />
        </div>
    );
}






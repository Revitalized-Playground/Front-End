/**
 * * Description of component
 * TODO: things to do
 * @props description 
 */

import React from 'react'

export default function Card({ img, title, description, key }) {
    return (
        <div className='card' key={key}>
            <img alt={`${title} cover`} src={img} />
            <h3>{title}</h3>
            <p>{description.split('').map((eachLetter, letterLength) => {
                if (letterLength <= 118) {
                    return eachLetter;
                } else {
                    return null;
                }
            }).join('')}{description.length > 118 ? "[read more...]" : null}
            </p>
        </div>
    )
}

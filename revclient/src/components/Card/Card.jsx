/**
 * * Description of component
 * TODO: things to do
 * @props description 
 */

import React from 'react'

export default function Card({ img, title, description, key }) {
    console.log(img)
    return (
        <div className='FPProjects' key={key}>
            <img alt={`${title} cover`} src={img} />
            <h4>{title}</h4>
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

import React from 'react';

import NoteworthyBox from './NoteworthyBox/NoteworthyBox';

const Noteworthy = () => {
    
    const noteworthyData = [
        {
            id: 1,
            city: "Urbandale",
            state: "IA",
            description: "NU Energy team is Revitalize’s upcoming project focused on renewable and sustainable energy. Experts in the wind energy industry share their knowledge and best practices with future wind turbine technicians.",
            link: "#",
            image: ""          
        },
        {
            id: 2,
            city: "Detroit",
            state: "MI",
            description: "Alger Theatre is one of Detroit’s well loved and iconic theatre. Multiple prospects compete to decide the future of Alger Theatre. Residents of the city hold the fate of Alger Theatre. What will the residents decide?",
            link: "#",
            image: ""                
        }
    ]

    return (
        <div className="noteworthyContainer">
            <h4>New & Noteworthy</h4>
            <div className="noteworthyContent">
                {noteworthyData.map(box => (
                    <NoteworthyBox key={box.id} box={box} />
                ))}
            </div>
        </div>
    );
};

export default Noteworthy;
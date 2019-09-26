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
            image: "https://res.cloudinary.com/revitalize/image/upload/v1569451140/start%20page/Windmill_jvynbk.svg"          
        },
        {
            id: 2,
            city: "Detroit",
            state: "MI",
            description: "Alger Theatre is one of Detroit’s well loved and iconic theatre. Multiple prospects compete to decide the future of Alger Theatre. Residents of the city hold the fate of Alger Theatre. What will the residents decide?",
            link: "#",
            image: "https://res.cloudinary.com/revitalize/image/upload/v1569451143/start%20page/Alger_theater_Dark_Mode_Pic_inlldb.svg"                
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
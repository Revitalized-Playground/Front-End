import React from 'react';

import StartNav from './StartNav/StartNav';
import Top from './Top/Top';
import RecommendedProjects from './RecommendedProjects/RecommendedProjects';
import NearYou from './NearYou/NearYou';
import Banner from './Banner/Banner';

const Start = () => {
    return (
        <div className="startContainer">
            <StartNav />
            <Top />
            <RecommendedProjects />
            <NearYou />
            <Banner />
        </div>
    );
};

export default Start;
import React from 'react';
import { Link } from 'react-router-dom';

import Houseplay from '../../../assets/BrowsePage/Houseplay.png';

const CreateProject = () => {
    return (
        <section className="createProjectContainer">
            <img src={Houseplay} alt="man at desk" />
            <div className="right">
                <p>Like what you see so far? Creating a project is made easier by using our simple form tool.</p>
                <Link to="/createproject"><button className="createButton">Create a Project</button></Link>
            </div>
        </section>
    );
};

export default CreateProject;

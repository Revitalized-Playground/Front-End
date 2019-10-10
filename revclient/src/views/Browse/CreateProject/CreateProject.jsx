import React from 'react';
import { Link } from 'react-router-dom';

import Houseplay from '../../../assets/BrowsePage/Houseplay.png';

const CreateProject = () => {
    return (
        <section className="create-project-container">
            <div className="create-project-image-container">
                <img src={Houseplay} alt="man at desk" />
            </div>
            <div className="right">
                <h4 className="create-project-cta-title">Like what you see?<br/>
                Create your own project</h4> 
                <Link to="/createproject"><button className="createButton">Create a Project</button></Link>
            </div>
        </section>
    );
};

export default CreateProject;

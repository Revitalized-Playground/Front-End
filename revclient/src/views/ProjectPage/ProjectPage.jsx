import React from 'react';
//Image Imports (To be deleted once we have a back end)
import pic1 from '../../assets/SingleProjectPage/pic1.png'
import pic2 from '../../assets/SingleProjectPage/pic2.png'
import pic3 from '../../assets/SingleProjectPage/pic3.png'
import commentProfile1 from '../../assets/SingleProjectPage/commentProfile1.png'
import commentProfile2 from '../../assets/SingleProjectPage/commentProfile2.png'
import userProfile from '../../assets/SingleProjectPage/userProfile.png'

//Component Imports
import Donate from './ProjectDescription/Donate/Donate'

const project = {
    projStartDate: 'January 13, 2020',
    duration: '9 months',
    difficultyLevel: 'Medium',
    projectBudget: '500000',
    raised: '50000',
    donors: 5723,
    projectPhotos: [pic1, pic2, pic3],
    comments: [
        {
            profilePic: commentProfile1,
            comment: 'I love what Team Rubicon is doing to promote community and growth!',
            createdAt: "",
            likes: ['name1', 'name2', 'name3',]
        },
        {
            profilePic: commentProfile2,
            comment: 'I love what Team Rubicon is doing to promote community and growth!',
            createdAt: "",
            likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3']
        }
    ],
    projectDescription: 'Detroit, MI Team Rubicon is a warehouse restoration project located in the heart of Detroit. The warehouse used to be an ancient machinery manufacturing plant and was later converted to an automative plant. Revitalize is partnering with city officials to restore the warehouse to a careers training high school. City officials are looking forward to collaborating with Revitalize to restore abandoned buildings and empower communities.  Revitalize also partners with local construction and design firms in Detroit to ensure students are receiving hands-on training with local experts and ready to launch into their career. Team Rubicon has raised $50,000 so far and are grateful to all the donors who are supporting community growth and building restoration projects in Detroit.'
}

const projectCreator = {
    name: 'Julian Crenshaw',
    role: 'Project Organizer',
    location: 'Detroit, MI',
    email: 'jcrenshaw@gmail.com',
    profile: userProfile
}

const ProjectPage = () => {
    return (
        <div className="project-page-container">
            <Donate 
              raised={project.raised}
              budget={project.projectBudget}
            />
        </div>
    );
};

export default ProjectPage;
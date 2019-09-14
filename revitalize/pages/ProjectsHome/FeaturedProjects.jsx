import React, {useState} from 'react';

const projects = [
    {
        title: 'Team Rubicon',
        description: 'Learn next to master trade professionals that are available during the day and after hours. Learn next to master trade Learn next to master trade professionals that are available during the day and after hours. Learn next to master trade',
        img: 'static/assets/ProjectPage/TR.png'
    },
    {
        title: 'Heavy Metal Queen',
        description: 'Learn next to master trade professionals that are available during the day and after hours.',
        img: 'static/assets/ProjectPage/HMQ.png'
    },
    {
        title: 'Jean Childs Project',
        description: 'Learn next to master trade professionals that are available during the day and after hours. ',
        img: 'static/assets/ProjectPage/JPP.png'
    },
    {
        title: 'Mission One Project',
        description: 'Learn next to master trade professionals that are available during the day and after hours.',
        img: 'static/assets/ProjectPage/M1p.png'
    },
    {
        title: 'Guidr Project',
        description: 'Learn next to master trade professionals that are available during the day and after hours.',
        img: 'static/assets/ProjectPage/GP.png'
    },
    {
        title: 'Clover 4',
        description: 'Learn next to master trade professionals that are available during the day and after hours.',
        img: 'static/assets/ProjectPage/Clover4.png'
    },
    {
        title: 'Project 7',
        description: 'description 7',
        img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg'
    },
    {
        title: 'Project 8',
        description: 'description 8',
        img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg'
    },
]

const FeaturedProjects = () => {
    const [featured, setFeatured] = useState(projects)

    if(!projects) return <div>Loading</div>
    return (
        <div className='FPContainer'>
            <h1>Featured Projects</h1>
            <div className='FPProjectList'>
            {featured.map((each, i) => {
                if(i < 6){
                    return (
                    <div className='FPProjects' key={i}>
                        <img alt={`${each.title} cover`} src={each.img} />
                        <h4>{each.title}</h4>
                        <p>{each.description.split('').map((eachLetter, letterLength) => {
                                if(letterLength <= 118){
                                    return eachLetter
                                }
                            }).join('')}{each.description.length > 118 ? "[read more...]" : null}
                        </p>
                    </div>
                    )
                }
                
            })}
            </div>
        </div>
    );
};

export default FeaturedProjects;
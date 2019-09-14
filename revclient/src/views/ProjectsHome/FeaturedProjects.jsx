import React, { useState } from 'react';
import tr from "../../assets/ProjectPage/TR.png";
import hmq from "../../assets/ProjectPage/HMQ.png";
import jpp from "../../assets/ProjectPage/JPP.png";
import m1p from "../../assets/ProjectPage/M1p.png";
import gp from "../../assets/ProjectPage/GP.png";
import clover4 from "../../assets/ProjectPage/Clover4.png";




const projects = [
    {
        title: 'Team Rubicon',
        description: 'Learn next to master trade professionals that are available during the day and after hours. Learn next to master trade Learn next to master trade professionals that are available during the day and after hours. Learn next to master trade',
        img: tr
    },
    {
        title: 'Heavy Metal Queen',
        description: 'Learn next to master trade professionals that are available during the day and after hours.',
        img: hmq
    },
    {
        title: 'Jean Childs Project',
        description: 'Learn next to master trade professionals that are available during the day and after hours. ',
        img: jpp
    },
    {
        title: 'Mission One Project',
        description: 'Learn next to master trade professionals that are available during the day and after hours.',
        img: m1p
    },
    {
        title: 'Guidr Project',
        description: 'Learn next to master trade professionals that are available during the day and after hours.',
        img: gp
    },
    {
        title: 'Clover 4',
        description: 'Learn next to master trade professionals that are available during the day and after hours.',
        img: clover4
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
    const [featured] = useState(projects)

    if(!projects) return <div>Loading</div>
    return (
        <div className='FPContainer'>
            <h1>Featured Projects</h1>
            <div className='FPProjectList'>
            {featured.map((each, i) => {
                if (i < 6) {
                    return (
                        <div className='FPProjects' key={i}>
                            <img alt={`${each.title} cover`} src={each.img} />
                            <h4>{each.title}</h4>
                            <p>{each.description.split('').map((eachLetter, letterLength) => {
                                    if(letterLength <= 118){
                                        return eachLetter;
                                    } else {
                                        return null;
                                    }
                                }).join('')}{each.description.length > 118 ? "[read more...]" : null}
                            </p>
                        </div>
                    )
                } else { return null; }
            })}
            </div>
        </div>
    );
};

export default FeaturedProjects;
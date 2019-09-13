import React, {useState} from 'react';

const projects = [
    {
        title: 'Project 1',
        description: 'description 1',
        img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg'
    },
    {
        title: 'Project 2',
        description: 'description 2',
        img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg'
    },
    {
        title: 'Project 3',
        description: 'description 3',
        img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg'
    },
    {
        title: 'Project 4',
        description: 'description 4',
        img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg'
    },
    {
        title: 'Project 5',
        description: 'description 5',
        img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg'
    },
    {
        title: 'Project 6',
        description: 'description 6',
        img: 'http://cupheadmemes.com/wp-content/uploads/2018/08/Best-Programming-Memes-026.jpg'
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
            {featured.map((each, i) => {
                if(i < 6){
                    return (
                    <div className='FPProjects' key={i}>
                        <img src={each.img} />
                        <h4>{each.title}</h4>
                        <p>{each.description}</p>
                    </div>
                    )
                }
                
            })}
        </div>
    );
};

export default FeaturedProjects;
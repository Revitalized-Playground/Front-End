import React from 'react'

const ProjectPictures = ({projectPhotos}) => {

    return (
        <div className='projectPictureContainer'>
            <p className='p'>Project Photos</p>
            <div className='projectImgCarousel'>
                {projectPhotos.map((each, i) => <img src={each} alt={i+1} />)}
            </div>
        </div>
    )
}

export default ProjectPictures
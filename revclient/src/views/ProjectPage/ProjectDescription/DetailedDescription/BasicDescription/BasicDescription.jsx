import React from 'react'
import durationImg from '../../../../../assets/SingleProjectPage/duration.png'
import difficultyLevel from '../../../../../assets/SingleProjectPage/difficultyLevel.png'
import projectOrganizer from '../../../../../assets/SingleProjectPage/projectOrganizer.png'


const BasicDescription = ({startDate, duration, difficulty, organizer}) => {

    return (
        <div className='basicDescriptionContainer'>
            <div className='descriptionInnerDiv'>
                <p className='projectStart'>PROJECT START DATE: {startDate}</p>
                <div className='detailsFlex'>
                    <div className='basicDetails'>
                        <img src={durationImg} alt='duration icon' />
                        <p>Duration: {duration}</p>
                    </div>
                    <div className='basicDetails'>
                        <img src={difficultyLevel} alt='difficulty level icon' />
                        <p>Difficulty: {difficulty}</p>
                    </div>
                    
                </div>
                <div className='detailsFlex'>
                    <img src={projectOrganizer} alt='Profile icon' />
                    <p>Project Organizer: {organizer}</p>
                </div>
            </div>
        </div>
    )
}

export default BasicDescription
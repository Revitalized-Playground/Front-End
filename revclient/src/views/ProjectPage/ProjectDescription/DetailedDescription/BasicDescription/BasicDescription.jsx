import React from 'react'
import durationImg from '../../../../../assets/SingleProjectPage/duration.png'
import difficultyLevel from '../../../../../assets/SingleProjectPage/difficultyLevel.png'
import projectOrganizer from '../../../../../assets/SingleProjectPage/projectOrganizer.png'
import moment from 'moment'


const BasicDescription = ({startDate, duration, difficulty, organizer}) => {
    const durationFunc = () => {
        if(Number(duration) / 12 >= 1) {
            return `${Math.round(duration / 12)} ${Math.round(duration / 12) === 1 ? 'Year' : 'Years'}, ${duration % 12} ${duration % 12 === 1 ? 'Month' : 'Months'}`
        } else {
            if(duration === 1) {
                return `${duration} ${duration === 1 ? 'Month' : 'Months'}`
            } else {
                return `${duration} Months`
            }
        }
    }

    return (
        <div className='basicDescriptionContainer'>
            <div className='descriptionInnerDiv'>
                <p className='projectStart'>PROJECT START DATE: {moment(startDate).format('MMMM Do, YYYY')}</p>
                <div className='detailsFlex mobile-column'>
                    <div className='basicDetails'>
                        <img src={durationImg} alt='duration icon' />
                        <p>Duration: {durationFunc()}</p>
                    </div>
                    <div className='basicDetails'>
                        <img src={difficultyLevel} alt='difficulty level icon' />
                        <p>Difficulty: {difficulty}</p>
                    </div>
                    
                </div>
                <div className='last'>
                    <img src={projectOrganizer} alt='Profile icon' />
                    <p>Project Organizer: {organizer}</p>
                </div>
            </div>
        </div>
    )
}

export default BasicDescription
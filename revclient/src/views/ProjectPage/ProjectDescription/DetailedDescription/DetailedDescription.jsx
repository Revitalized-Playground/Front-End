import React from 'react'
// import BasicDetails from './BasicDescription/BasicDescription.jsx'
import email from '../../../../assets/SingleProjectPage/email.png'

const DetailedDescription = ({startDate, duration, difficulty, organizer, location, projDescription, projectCreator}) => {

    return (
        <div className='detailedDescriptionContainer'>
            {/* <BasicDetails 
              startDate={startDate}
              duration={duration}
              difficulty={difficulty}
              organizer={organizer}
            /> */}
            {projDescription.length > 1100 
            ?
                <p className='detailedDescription'> <span>{location.toUpperCase()}</span>{projDescription.split('').map((each, index) => {
                    if(index < 1101) {
                        return each
                    } else {
                        return null
                    }
                }).join('')}... <strong>{projDescription.length > 1100 && 'Read More'}</strong></p>
            :
                <p className='detailedDescription'><span>{location.toUpperCase()}</span>{projDescription}</p>
            } 
            <div className='creatorProfile'>
                <div className='profile-center'>
                <img className='profilePic' src={projectCreator.profilePic} alt='Profile' />
                <div className='creatorInfo'>
                    <h2>{projectCreator.name}</h2>
                    <p>{projectCreator.role}</p>
                    <p>{projectCreator.location}</p>
                    <div className='email'>
                        <img src={email} alt='email icon' />
                        <h2>{projectCreator.email}</h2>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default DetailedDescription
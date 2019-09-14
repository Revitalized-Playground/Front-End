import React from 'react'


const CurriculumOptions = () => {
    return (
        <section style={{backgroundImage: "url(../../static/assets/ProjectPage/blueBackgroundVector.png)"}} className='curriculumOpContainer'>
            <div className='curriculumShapesLeft'>
                <img alt='shape 1' src='../../static/assets/ProjectPage/2Polygon.png'/>
                <img alt='shape 2' src='../../static/assets/ProjectPage/Ellipse.png'/>
            </div>
            <div className='curriculumMid'>
                <div className='first'>
                    <h1>Now accepting January 2020 apprentices for the following trades</h1>
                    <div className='flex'>
                        <div>
                            <h2>Mechanical</h2>
                            <h3>Auto mechanic</h3>
                            <h3>HVAC installer</h3>
                            <h3>Locksmith</h3>
                        </div>
                        <div>
                            <h2>Building</h2>
                            <h3>Plumbing</h3>
                            <h3>Electrician</h3>
                        </div>
                        <div>
                            <h2>Industrial</h2>
                            <h3>Welding</h3>
                        </div>
                        <div>
                            <h2>Healthcare</h2>
                            <h3>Paramedic</h3>
                            <h3>Respiratory Therapist</h3>
                        </div>
                    </div>
                </div>
                <div className='second'>
                    <h1>Ready to jumpstart your career? Apply now and experience a new approach to learning!</h1>
                    <button>Apply Now</button>
                </div>
            </div>
            <img className='teacher' alt='Teacher Pointing' src='../../static/assets/ProjectPage/ladyteaching.png' />
            <div className='curriculumShapesRight'>
                <img className='small' alt='shape 3' src='../../static/assets/ProjectPage/Group2k.png'/>
                <img className='large' alt='shape 4' src='../../static/assets/ProjectPage/pinkSquiggly.png'/>
            </div>
        </section>
    )
}


export default CurriculumOptions
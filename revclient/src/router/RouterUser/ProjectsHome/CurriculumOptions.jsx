import React from 'react';
import ladyTeacher from "../../assets/ProjectPage/ladyTeaching.png";
import group2k from "../../assets/ProjectPage/Group2k.png";
import pinkSquigly from "../../assets/ProjectPage/pinkSquiggly.png";
import twoPolygon from "../../assets/ProjectPage/2Polygon.png";
import ellipse from "../../assets/ProjectPage/Ellipse.png"



const CurriculumOptions = () => {
    return (
        <section className='curriculumOpContainer'>
            <div className='curriculumShapesLeft'>
                <img alt='shape 1' src={twoPolygon} />
                <img alt='shape 2' src={ellipse} />
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
            <img className='teacher' alt='Teacher Pointing' src={ladyTeacher} />
            <div className='curriculumShapesRight'>
                <img className='small' alt='shape 3' src={group2k} />
                <img className='large' alt='shape 4' src={pinkSquigly} />
            </div>
        </section>
    )
}


export default CurriculumOptions
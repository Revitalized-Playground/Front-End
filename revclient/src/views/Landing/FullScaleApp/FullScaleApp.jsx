import React from 'react';

// import classroomTraining
import classroomTraining from '../../../assets/LandingPage/Classroom Training.png';

const FullScaleApp = () => {
    return (
      <section className="full-scale-application">
        <div className="full-scale-application-cta">
          <h2>Full Scale Application</h2>
          <p>
            Log classroom and on-the-job-training hours
            all <br /> under one streamlined application
          </p>
          <button>Apply Now</button>
        </div>
        <img
          src={classroomTraining}
          alt="two people in a classroom"
        />
    </section>
    );
};

export default FullScaleApp;
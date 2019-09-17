import React from 'react';

import twoBuds from "../../../assets/LandingPage/You got this bud.png";

const OnTheJob = () => {
    return (
        <section className="on-the-job-training">
        <img
          src={twoBuds}
          alt="two buds"
        />
        <div className="training-cta">
          <h2>On the Job Training</h2>
          <p>
            Work under Licensed Professionals to qualify and log hours for state
            licensure requirements.
          </p>
          <button>Let's Do This!</button>
        </div>
      </section>
    );
};

export default OnTheJob;
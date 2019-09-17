import React from 'react';

import rubiconPhones from "../../../assets/LandingPage/RubiconPhones.png";
import teamRubicon from "../../../assets/LandingPage/Team Rubicon.png";

const FeaturedProjects = () => {
    return (
        <section className="featured-project">
        <img
          className="phone-left phone"
          src={rubiconPhones}
          alt="cell phone"
        />

        <div className="user-story">
          <img
            className="user-photo"
            src={teamRubicon}
            alt="construction worker"
          />
          <h2 className="user-info">Team Rubicon - Flint, MI</h2>
          <p>
            Come see the journey of our students and industry experts restore an
            abandoned school building to a modern state-of-the-art career
            school. The new school year will be starting Fall of 2020. Thank you
            to our amazing donors and partners for inspiring our apprentices.
          </p>
        </div>
        <img
          className="phone-right phone"
          src={rubiconPhones}
          alt="cell phone"
        />
      </section>
    );
};

export default FeaturedProjects;
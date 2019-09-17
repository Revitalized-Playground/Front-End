import React from 'react';

import heroImage from "../../../assets/LandingPage/Hero Image.png";
import applyNow from "../../../assets/LandingPage/Apply Now.png";
import donateNow from "../../../assets/LandingPage/Donate Now.png";
import searchNow from "../../../assets/LandingPage/Search Now.png"

const Header = () => {
    return (
        <section className="header">
        <div className="cta-container">
          <div className="cta">
            <h2 className="cta-title">
              A modern approach to become <br />a licensed trades professional
            </h2>
            <p>
              Debt free hands-on education to rebuilding local communities
              through crowdfunding.
            </p>
            <button>Start Your Journey Now!</button>
          </div>
          <img src={heroImage} alt="Hero"/>
        </div>

        <div className="values">
          <p>Values that will direct you to a successful career</p>
          <div className="value-tiles">
            <div className="tenacity">
              <h4>Tenacity</h4>
            </div>
            <div className="ingenuity">
              <h4>Ingenuity</h4>
            </div>
            <div className="growth">
              <h4>Growth</h4>
            </div>
            <div className="diligence">
              <h4>Diligence</h4>
            </div>
            <div className="resilience">
              <h4>Resilience</h4>
            </div>
            <div className="compassion">
              <h4>Compassion</h4>
            </div>
          </div>
        </div>

        <div className="applicaton-links-container">
          <div className="students img-container" onClick={() => {}}>
            <img src={applyNow} alt="Apply now"/>
            <p>Apply Now!</p>
          </div>

          <div className="donor img-container" onClick={() => {}}>
            <img src={donateNow} alt="Donate now"/>
            <p className="donate-text">Donate Now!</p>
          </div>

          <div className="employers img-container" onClick={() => {}}>
            <img src={searchNow} alt="Search now"/>
            <p>Search Now!</p>
          </div>
        </div>
      </section>
    );
};

export default Header;
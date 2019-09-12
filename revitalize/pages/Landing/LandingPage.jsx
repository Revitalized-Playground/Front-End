/**
 * * Description of component
 * TODO: things to do
 * @props description 
 */

import React from 'react'

export default function LandingPage() {
    
    return (
      <>
        {/* <NavBar /> */}
        <section className="header">
          <div className="cta-container">
            <div className="cta">
              <h2 className="cta-title">
                A Modern approach to become <br />a licensed trades
                professional
              </h2>
              <p>
                Debt free hands-on education to rebuilding local communities
                through crowdfunding.
              </p>
              <button>Start Your Journey Now!</button>
            </div>
            <img src="../../static/assets/LandingPage/Hero Image.png" />
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
              <img src="../../static/assets/LandingPage/Apply Now.png" />
              <p>Apply Now!</p>
            </div>

            <div className="donor img-container" onClick={() => {}}>
              <img src="../../static/assets/LandingPage/Donate Now.png" />
              <p className="donate-text">Donate Now!</p>
            </div>

            <div className="employers img-container" onClick={() => {}}>
              <img src="../../static/assets/LandingPage/Search Now.png" />
              <p>Search Now!</p>
            </div>
          </div>
        </section>

<div className="our-purpose-wrapper" >
        <section className="our-purpose" style={{background: "url('../../static/assets/LandingPage/GreyRectangle.png')", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}} >
          <div className="our-purpose-cta">
            <div className="floated-tuition-cta">
              <h3 className="title">
                $0 Tuition upfront <span className="highlighted-text">.</span>
              </h3>
              <p>No additional loans to weigh you down!</p>
              <p>
                No payment until you are hired! Once hired, pay 10% of your
                income for 3 years.
              </p>
              <button>Start Now!</button>
              <img
                src="../../static/assets/LandingPage/Debt man.png"
                alt="Debt man"
              />
            </div>
            <div className="our-purpose-content">
              <h3>OUR PURPOSE</h3>
              <p className="">
                <p className="mission-statement"> Training next level professionals<br/>
                <span className="highlighted-text"> to empower communities.</span>
                </p>
                <p>
                  Revitalize is a project-based apprenticeship program providing hands on 
                  training and preparing our apprentices to transition to jobs in the industry.
                </p>
                <p>
                  Our apprentices receive hands-on training daily from worldclass experts and 
                  instructors. Revitalize partners with local colleges to ensure students are prepared 
                  to enter the industry.
                </p>
              </p> 
            </div>
          </div>
        </section>
        </div>

        <section className="on-the-job-training">
          <img
            src="../../static/assets/LandingPage/You got this bud.png"
            alt="two buds"
          />
          <div className="training-cta">
            <h2>On the Job Training</h2>
            <p>
              Work under Licensed Professionals to qualify and log hours for state licensure requirements  
            </p>
            <button>Let's Do This!</button>
          </div>
        </section>

        <section className="full-scale-application">
          <div className="full-scale-application-cta">
            <h2>Full Scale Application</h2>
            <p>
              Log classroom and on-the-job-training hours<br/> all under one
              streamlined application
            </p>
            <button>Apply Now!</button>
          </div>
          <img
            src="../../static/assets/LandingPage/Classroom Training.png"
            alt="two people in a classroom"
          />
        </section>

        <section className="featured-project">
            <img
              className="phone-left phone"
              style={{border:0,
                display:"inline-block",
                transform:"scale(-1,1)",
                }}
              src="../../static/assets/LandingPage/Rubicon phones.png"
              alt="cell phone"
            />
          
            
          

          <div className="user-story">
            <img
              className="user-photo"
              src="../../static/assets/LandingPage/Team Rubicon.png"
              alt="construction worker"
            />
            <h2 className="user-info">Team Rubicon - Flint, MI</h2>
            <p>
              Come see the journey of our students and industry experts restore
              an abandoned school building to a modern state-of-the-art career
              school. The new school year will be starting Fall of 2020. Thank
              you to our amazing donors and partners for inspiring our
              apprentices.
            </p>
          </div>
          <img
              className="phone-right phone"
              src="../../static/assets/LandingPage/Rubicon phones.png"
              alt="cell phone"
            />
        </section>

        <section className="search-projects-near-you">
          <form onSubmit={() => {}} className="search-projects">
            <h2>Search for Apprenticeship Projects Near You!</h2>
            <p className="description">
              Explore various projects trending in your local area and be the
              first to see what's going on.
            </p>
            <input type="text" placeholder="Enter Location" />
            <button>Search Now!</button>
          </form> */}

          {/* This is where the map will go from our 3rd party solution */}
        </section>

         {/* <section className="testimonials">
           <img
             src="../../static/assets/LandingPage/Lucas Bubble.png"
             alt="quote bubble"
           />
           <img
             src="../../static/assets/LandingPage/Lucas.png"
             alt="Lucas"
           />
           <p>
             Hear what our students, experts, and supporters are raving about...
           </p>
           <img
             src="../../static/assets/LandingPage/Maxwell Bubble.png"
             alt="quote bubble"
           />
           <img
             src="../../static/assets/LandingPage/Maleescha Mclarin.png"
             alt="Maleescha"
           />
         </section> */}

         {/* <Footer /> */}
       </>
     );
}
    
                
    
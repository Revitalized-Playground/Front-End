/**
 * * Description of component
 * TODO: things to do
 * @props description 
 */

 import React from 'react'
 
 import './LandingPage.scss';
 
 export default function LandingPage() {
     
     
     return (
       <>
         {/* <NavBar /> */}
         <section className="header">
           <div className="cta-container">
             <div className="cta">
               <h2 className="cta-title">
                 A Modern approach to become a licensed trades professional
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
               <h4>Tenacity</h4>
               <h4>Ingenuity</h4>
               <h4>Growth</h4>
               <h4>Diligence</h4>
               <h4>Resilience</h4>
               <h4>Compassion</h4>
             </div>
           </div>
           <div className="applicaton-links-container">
             <div className="students" onClick={() => {}}>
               <span></span>
               <div className="img-container">
                 <img src="../../static/assets/LandingPage/Apply Now.png" />
                 <p>Apply Now!</p>
               </div>
             </div>
             <div className="donor" onClick={() => {}}>
               <span></span>
               <div className="img-container">
                 <img src="../../static/assets/LandingPage/Donate Now.png" />
                 <p>Donate Now!</p>
               </div>
             </div>
             <div className="employers" onClick={() => {}}>
               <span></span>
               <div className="img-container">
                 <img src="../../static/assets/LandingPage/Search Now.png" />
                 <p>Search Now!</p>
               </div>
             </div>
           </div>
         </section>

         <section className="our-purpose">
           <img
             src="../../static/assets/LandingPage/Gray rectangle with shapes.png"
             alt="Gray background"
           />
           <div className="background-content">
             <div className="floated-tuition-cta">
               <h3 className="title">
                 $0 Tuition upfront <span className='highlighted-text'>.</span>
               </h3>
               <p></p>
               <button>Get Started!</button>
               <img src="../../static/assets/LandingPage/Debt man.png"
             alt="Debt man" />
             </div>
             <h2></h2>
             <p className="title">
               <span className="highlighted-text"></span>
             </p>
           </div>
         </section>

         <section className="on-th-job-training">
           <img src="" alt="" />
           <div className="training-cta">
             <p></p>
             <button>Let's Do This!</button>
           </div>
         </section>

         <section className="full-scale-applicatoin">
           <div className="full-scale-applicatoin-cta">
             <p></p>
             <button>Let's Do This!</button>
           </div>
           <img src="" alt="" />
         </section>
         {/* <Footer /> */}
       </>
     );
}
    
                
    
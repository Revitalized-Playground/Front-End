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
             <h2>OUR PURPOSE</h2>
             <p className="title">
               Training next level professionals to
               <span className="highlighted-text">empower communities</span>.
             </p>
           </div>
         </section>

         <section className="on-th-job-training">
           <img src="../../static/assets/LandingPage/You got this bud.png" alt="two buds" />
           <div className="training-cta">
             <p>On the Job Training</p>
             <button>Let's Do This!</button>
           </div>
         </section>

         <section className="full-scale-applicatoin">
           <div className="full-scale-applicatoin-cta">
             <h2>Full Scale Application</h2>
             <p>Log classroom and on-the-job-training hours all under one streamlined application</p>
             <button>Apply Now!</button>
           </div>
           <img src="../../static/assets/LandingPage/Classroom Training.png" alt="two people in a classroom"/>
         </section>

         <section className="featured-project">
             
           <div className="title-and-img user-story">
             <img src="" alt="" />
           </div>

           <div className="user-story">
             <img src="" alt="" />
             <h2 className="user-info">

             </h2>
             <p>
                 
             </p>
           </div>
           <img src="" alt=""/>
         </section>

         <section className="search-projects-near-you">

             <form onSubmit={()=>{}} className="search-projects">
                 <p className="description">
                 </p>
                 <input type="text" placeholder="Enter Location"/>
                 <button></button>
             </form>

             {/* This is where the map will go from our 3rd party solution */}
         </section>
         {/* <Footer /> */}
       </>
     );
}
    
                
    
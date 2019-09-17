import React from "react";

import Header from './Header/Header';
import OurPurpose from "./OurPurpose/OurPurpose";
import OnTheJob from './OnTheJob/OnTheJob';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import SearchProjects from './SearchProjects/SearchProjects';
import Testimonials from './Testimonials/Testimonials';
import FullScaleApp from "./FullScaleApp/FullScaleApp";

/**
 * * Description of component
 * TODO: things to do
 * @props description
 */


export default function LandingPage() {

  return (
    <>
      {/* nav - jose */}
      <Header /> {/* jose */}
      <OurPurpose /> {/* jose */}
      <OnTheJob /> {/* clark */}
      <FullScaleApp /> {/* clark */}
      <FeaturedProjects /> {/* clark */}
      <SearchProjects /> {/* alex */}
      <Testimonials /> {/* alex */}
      {/* footer - alex */}
    </>
  );
}

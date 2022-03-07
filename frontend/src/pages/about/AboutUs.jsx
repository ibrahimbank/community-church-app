import React from "react";
import LoveAndCompasionSection from "../../common/LoveAndCompasionSection";
import AboutBenefits from "./AboutBenefits";
import AboutHeader from "./AboutHeader";
import MissionAndVission from "./MissionAndVission";
import OurTeam from "./OurTeam";

function AboutUs() {
  return (
    <>
      <AboutHeader />
      <LoveAndCompasionSection />
      <MissionAndVission />
      <AboutBenefits />
      <OurTeam />
    </>
  );
}

export default AboutUs;

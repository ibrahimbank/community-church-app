import React from "react";
import Footer from "../../common/Footer";
import LoveAndCompasionSection from "../../common/LoveAndCompasionSection";
import Navbar from "../../common/Navbar";
import AboutBenefits from "./AboutBenefits";
import AboutHeader from "./AboutHeader";
import MissionAndVission from "./MissionAndVission";
import OurTeam from "./OurTeam";

function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutHeader />
      <LoveAndCompasionSection />
      <MissionAndVission />
      <AboutBenefits />
      <OurTeam />
      <Footer />
    </>
  );
}

export default AboutUs;

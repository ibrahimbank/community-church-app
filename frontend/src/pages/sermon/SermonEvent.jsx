import React from "react";
import Events from "../../common/Events";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import RegisterSection from "./RegisterSection";

function SermonEvent() {
  return (
    <div className="bg-[#E5E5E5]">
      <Navbar />
      <RegisterSection />
      <Events heading="UPCOMING SERMONS" />
      <Footer />
    </div>
  );
}

export default SermonEvent;

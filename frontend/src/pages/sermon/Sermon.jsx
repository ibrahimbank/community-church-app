import React from "react";
import Events from "../../common/Events";
import Footer from "../../common/Footer";
import JoinUs from "../../common/JoinUs";
import Navbar from "../../common/Navbar";
import SermonHeader from "./SermonHeader";

function Sermon() {
  return (
    <>
      <Navbar />
      <SermonHeader />
      <JoinUs />
      <Events heading="VIEW ALL SERMON" />
      <Footer />
    </>
  );
}

export default Sermon;

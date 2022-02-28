import Header from "./Header";
import WhatWeDo from "./WhatWeDo";
import CelebrateWithUs from "./CelebrateWithUs";
import Benefit from "./Benefit";
import JoinUs from "../../common/JoinUs";
import Events from "../../common/Events";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import Serve from "./Serve";
import { Reveal } from "react-reveal";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Reveal>
        <WhatWeDo />
        <CelebrateWithUs />
        <Benefit />
        <JoinUs />
        <Serve />
        <Events
          subHeading="READ OUR BLOG heading"
          heading="SHARE, INSPIRE, INNOVATE"
        />
      </Reveal>
      <Footer />
    </>
  );
}

export default Home;

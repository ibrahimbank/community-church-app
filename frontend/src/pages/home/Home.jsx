import Header from "./Header";
import WhatWeDo from "./WhatWeDo";
import CelebrateWithUs from "./CelebrateWithUs";
import Benefit from "./Benefit";
import JoinUs from "../../common/JoinUs";
import Events from "../../common/Events";
import Serve from "./Serve";
// import { Reveal } from "react-reveal";
// home

function Home() {
  return (
    <div className="pb-32 sm:w-full">
      <Header />
      {/* <Reveal> */}
      <WhatWeDo />
      <CelebrateWithUs />
      <Benefit />
      <JoinUs />
      <Serve />
      <Events subHeading="READ OUR BLOG" heading="SHARE, INSPIRE, INNOVATE" />
      {/* </Reveal> */}
    </div>
  );
}

export default Home;

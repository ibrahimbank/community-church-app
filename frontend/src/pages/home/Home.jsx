import Header from "./Header";
import WhatWeDo from "./WhatWeDo";
import CelebrateWithUs from "./CelebrateWithUs";
import Benefit from "./Benefit";
import JoinUs from "../../common/JoinUs";
import Events from "../../common/Events";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import Serve from "./Serve";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <WhatWeDo />
      <CelebrateWithUs />
      <Benefit />
      <JoinUs />
      <Serve />
      <Events />
      <Footer />
    </>
  );
}

export default Home;

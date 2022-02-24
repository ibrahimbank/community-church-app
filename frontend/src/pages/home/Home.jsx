import Navbar from "./Navbar";
import Header from "./Header";
import WhatWeDo from "./WhatWeDo";
import CelebrateWithUs from "./CelebrateWithUs";
import Benefit from "./Benefit";
import JoinUs from "../../common/JoinUs";
import Events from "../../common/Events";
import Footer from "../../common/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <WhatWeDo />
      <CelebrateWithUs />
      <Benefit />
      <JoinUs />
      <Events />
      <Footer />
    </>
  );
}

export default Home;

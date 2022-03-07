import React from "react";
import Events from "../../common/Events";
import JoinUs from "../../common/JoinUs";
import SermonHeader from "./SermonHeader";

function Sermon() {
  return (
    <>
      <SermonHeader />
      <JoinUs />
      <Events heading="VIEW ALL SERMON" />
    </>
  );
}

export default Sermon;

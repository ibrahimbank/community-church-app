import React from "react";
import Events from "../../common/Events";
import JoinUs from "../../common/JoinUs";
import SermonHeader from "./SermonHeader";

function Sermon() {
  return (
    <div className="pb-32">
      <SermonHeader />
      <JoinUs />
      <Events heading="VIEW ALL SERMON" />
    </div>
  );
}

export default Sermon;

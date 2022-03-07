import React from "react";
import Events from "../../common/Events";

import RegisterSection from "./RegisterSection";

function SermonEvent() {
  return (
    <div className="bg-[#E5E5E5] pb-32">
      <RegisterSection />
      <Events heading="UPCOMING SERMONS" />
    </div>
  );
}

export default SermonEvent;

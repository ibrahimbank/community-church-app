import React from "react";

function Benefit() {
  return (
    <div className="flex flex-col mt-32 items-center justify-items-center">
      <h6 className="font-normal leading-4 mb-4">WATCH AND LISTEN</h6>
      <h2 className="w-96 text-center mb-16 ">
        THE BENEFITS OF JOINING OUR CHURCH
      </h2>
      <div className="flex items-center justify-items-center space-x-4">
        <div className="benefit-card bg-nun">
          <h4>WATCH AND LISTEN TO OUR SERMON</h4>
        </div>
        <div className="benefit-card bg-man-holding-bible ">
          <h4>WATCH AND LISTEN TO OUR SERMON</h4>
        </div>
        <div className="benefit-card bg-man-reading-bible">
          <h4>WATCH AND LISTEN TO OUR SERMON</h4>
        </div>
        <div className="benefit-card bg-ancient-picture">
          <h4>WATCH AND LISTEN TO OUR SERMON</h4>
        </div>
      </div>
    </div>
  );
}

export default Benefit;

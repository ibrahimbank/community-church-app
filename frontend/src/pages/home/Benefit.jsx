import React from "react";

function Benefit() {
  return (
    <section className="flex  doo flex-col mt-32 items-center justify-items-center bg-[#F5F2F0] pt-32">
      <h6 className="font-normal leading-4 mb-4">WATCH AND LISTEN</h6>
      <h2 className=" w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 text-center mb-16 ">
        THE BENEFITS OF JOINING OUR CHURCH
      </h2>
      <div className="flex doo pb-32 flex-col md:grid md:grid-cols-2 sm:grid gap-8 sm:grid-cols-2 xl:grid-cols-3 items-center justify-items-center xl:space-x-4 ">
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
    </section>
  );
}

export default Benefit;

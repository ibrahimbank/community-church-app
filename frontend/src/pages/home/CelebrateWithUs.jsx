import React from "react";
import LoveAndCompasionSection from "../../common/LoveAndCompasionSection";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CelebrateWithUs() {
  const navigate = useNavigate();
  return (
    <section>
      <LoveAndCompasionSection />
      <div className="flex doo flex-col items-center justify-items-center mt-24">
        <h6 className="text-base font-normal leading-7 doo">
          OUR MISSION & VISSION
        </h6>
        <h4 className="text-2xl font-bold mt-4 mb-4">CELEBRATE WITH US</h4>
        <p className="opacity-75 w-1/2 text-center mb-4 h-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          className="btn mt-8 flex items-center justify-items-center text-sm"
          onClick={() => navigate("/#try")}
        >
          Read More <FaArrowRight className=" ml-2 text-[#33343E]" />
        </button>
      </div>
    </section>
  );
}

export default CelebrateWithUs;

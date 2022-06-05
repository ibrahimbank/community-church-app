import ImageOne from "../images/beardedManPraying.svg";
import ImageTwo from "../images/manAndWomanReading.svg";
import ImageThree from "../images/oldWomanInGreen.png";
import { useNavigate } from "react-router-dom";

function LoveAndCompasionSection() {
  const navigate = useNavigate();
  return (
    <section className="flex  flex-col items-center justify-items-center mt-16 pt-16">
      <h2 className=" text-base sm:text-lg font-bold mb-12 leading-10 text-[#161722]">
        LOVE AND COMPASSION
      </h2>
      <p className="text-[#161722] w-3/4 text-center opacity-75 leading-6 mb-14 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <button
        className="btn mb-4 w-40 rounded-xl text-[#1C1D28] bg-[#FFD2A4]  text-sm font-normal lg:mb-8"
        onClick={() => navigate("/about-us")}
      >
        READ MORE
      </button>
      <div className="flex  flex-col md:grid grid-cols-2 md:content-center md:justify-items-center md:self-center items-center xl:grid-cols-3 space-x-4">
        <img
          src={ImageOne}
          alt="worshipper"
          className="love-img w-72 h-96 xl:-translate-y-20"
        />
        <img
          src={ImageTwo}
          alt="worshipper"
          className="hidden md:hidden xl:flex love-img md:w-72 lg:w-96 xl:translate-y-12"
        />
        <img
          src={ImageThree}
          alt="worshipper"
          className="hidden md:flex love-img w-72 h-96 xl:-translate-y-20"
        />
      </div>
    </section>
  );
}

export default LoveAndCompasionSection;

import ImageOne from "../images/beardedManPraying.svg";
import ImageTwo from "../images/manAndWomanReading.svg";
import ImageThree from "../images/oldWomanInGreen.png";

function LoveAndCompasionSection() {
  return (
    <div className="flex flex-col items-center justify-items-center mt-16 pt-16">
      <h2 className=" font-bold mb-12 leading-10 text-[#161722]">
        LOVE AND COMPASSION
      </h2>
      <p className="text-[#161722] w-3/4 text-center opacity-75 leading-6 mb-14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <button className="btn-love rounded-xl text-[#1C1D28] bg-[#FFD2A4]  text-base font-normal">
        READ MORE
      </button>
      <div className="flex items-center justify-items-center space-x-4">
        <img
          src={ImageOne}
          alt="worshipper"
          className="love-img w-72 h-96 -translate-y-20"
        />
        <img
          src={ImageTwo}
          alt="worshipper"
          className="love-img  w-96 translate-y-12"
        />
        <img
          src={ImageThree}
          alt="worshipper"
          className="love-img w-72 h-96 -translate-y-20"
        />
      </div>
    </div>
  );
}

export default LoveAndCompasionSection;
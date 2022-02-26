import QuoteIcon from "../../images/QuoteIcon.png";
import agedGrandCathedral from "../../images/agedGrandCathedral.svg";
import { FaQuoteRight } from "react-icons/fa";

function Serve() {
  return (
    <section className="serve mb-32 ">
      <div className="serve-wrapper  w-full h-full flex items-center justify-center">
        <div className="flex flex-col server-card-wrapper w-1/2  bg-white">
          <div className="flex h-2/3 px-12 py-16">
            <div className="serve-card  text-xl">
              <h2 className=" mb-4 leading-tight">
                WE WANT TO SERVE THE WORLD AROUND US
              </h2>
              <p className="opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
              <button className="w-40 h-20 bg-[#FFD2A4]  text-black rounded-md text-base items-center mt-4">
                VISIT
              </button>
            </div>
            <div className="flex items-center justify-center w-1/2 ">
              {/* <img src={QuoteIcon} alt="quote icon" /> */}
              <FaQuoteRight color="#FFF5EB" className="quote w-48 h-36" />
            </div>
          </div>
          <div className="h-4 w-full bg-[#FFD2A4]"></div>
        </div>
      </div>
    </section>
  );
}

export default Serve;

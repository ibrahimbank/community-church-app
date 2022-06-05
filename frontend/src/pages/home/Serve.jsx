import { FaQuoteRight } from "react-icons/fa";

function Serve() {
  return (
    <section className="serve  mb-32 ">
      <div className="serve-wrapper  w-full h-full flex  items-center justify-center">
        <div
          className="flex items-center justify-center flex-col server-card-wrapper w-3/4 sm:w-1/2  bg-white 
        "
        >
          <div className="flex w-full h-full sm:h-2/3 px-2 py-5 sm:px-12 sm:py-16">
            <div className="serve-card w-full text-xl">
              <h2 className=" mb-4 text-xs sm:text-base md:text-justify text-center">
                WE WANT TO SERVE THE WORLD AROUND US
              </h2>
              <p className="opacity-75  md:text-justify text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
              <button className="btn w-20 sm:w-32 bg-[#FFD2A4]  text-black rounded-md text-sm items-center mt-4">
                VISIT
              </button>
            </div>
            <div className="flex items-center justify-center w-1/2 ">
              {/* <img src={QuoteIcon} alt="quote icon" /> */}
              <FaQuoteRight
                color="#ded2c7"
                className="quote w-12 lg:w-48 h-36"
              />
            </div>
          </div>
          <div className="h-4 w-full bg-[#FFD2A4]"></div>
        </div>
      </div>
    </section>
  );
}

export default Serve;

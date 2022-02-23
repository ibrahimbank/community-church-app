import image from "../images/wing.svg";
import { FaArrowRight, FaClock, FaMapPin } from "react-icons/fa";

function JoinUs() {
  return (
    <section className="flex flex-col items-center justify-items-center pt-32">
      <h6 className="text-base font-normal mb-4">UPCOMING SERMON</h6>
      <h2 className="w-1/2 text-center">
        JOIN US AND BECOME PART OF SOMETHING GREAT
      </h2>
      <div className="event flex mt-16 mb-12">
        <div className="check relative flex flex-col bg-[#FFF5EB] items-start justify-items-center px-20 py-12">
          <h6 className="join-text text-xs font-bold">UPCOMING EVENT</h6>
          <h5 className="text-xl w-2/3 mt-4 mb-8 font-bold">
            WATCH AND LISTEN TO OUR SERMON
          </h5>
          <p className="w-64 opacity-75 font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="">
            <div className="date">
              <FaClock className="w-5 mr-4" />
              <div className="address">
                <p>Friday 23:39 IST </p>
                <p>Saturday 11:20 ISD</p>
              </div>
            </div>
            <div className="date">
              <FaMapPin className="w-5 mr-4" />
              <div className="address">
                <p>No 233 Main St. New York, </p>
                <p>United States</p>
              </div>
            </div>
          </div>
          <button className="btn-join w-52 mt-6 bg-[#161722] rounded-xl text-[#FFD2A4]">
            REGISTER
          </button>
          <span className="flex flex-col items-center justify-items-center absolute top-0 right-0 p-4">
            <h5 className="text-2xl font-bold">20</h5>
            <p className="text-base font-normal">JULY</p>
          </span>
        </div>
        <div className="event-img h-full">
          <img src={image} alt="members" className="h-full" />
        </div>
      </div>
      <div className="flex flex-col justify-items-center  items-end check w-full p-8">
        <button className="flex space-x-2">
          VIEW ALL SERMONS <FaArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
}

export default JoinUs;

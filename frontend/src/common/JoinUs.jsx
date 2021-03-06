import image from "../images/manAndWomanWithWings.svg";
import { FaArrowRight, FaClock, FaMapPin } from "react-icons/fa";
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <section className="hidden 2xl:flex flex-col items-center justify-items-center pt-32">
      <h6 className="text-base font-normal mb-4">UPCOMING SERMON</h6>
      <h2 className="w-1/2 text-center">
        JOIN US AND BECOME PART OF SOMETHING GREAT
      </h2>
      <div className="event flex 2xl:flex-row items-center 2xl:items-start mt-16 mb-12">
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
          <Link to="/sermon-events">
            <button className="btn text-sm w-40 mt-6 bg-[#161722] rounded-xl text-[#FFD2A4]">
              REGISTER
            </button>
          </Link>
          <span className="flex flex-col items-center justify-items-center absolute top-0 right-0 p-4">
            <h5 className="text-2xl font-bold">20</h5>
            <p className="text-base font-normal">JULY</p>
          </span>
        </div>
        <div className="2xl:flex h-full">
          <img src={image} alt="members" className="" />
        </div>
      </div>
      <div className="flex flex-col justify-items-center  items-end  w-full p-8">
        <Link to="/sermon">
          <button className="flex text-sm space-x-2">
            VIEW ALL SERMONS <FaArrowRight className="ml-2  text-sm w-4" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default JoinUs;

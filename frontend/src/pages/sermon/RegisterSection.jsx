import { FaMapPin, FaClock } from "react-icons/fa";
import image from "../../images/sermonImg2.png";

function RegisterSection() {
  return (
    <section className="flex justify-between mt-20 space-x-28 p-32">
      <div className="flex flex-col">
        <img src={image} alt="bible" className="img-event-list" />
        <h6 className="mt-8">UPCOMING EVENT</h6>
        <h4 className="mb-4 mt-4 font-bold text-lg">
          HOW TO TRULY TRUST SOMEONE
        </h4>
        <p className="mb-6 opacity-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
          faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra
          sit amet aliquam id diam maecenas ultricies.
        </p>

        <blockquote className="flex items-center mb-6 opacity-75 text-lg px-4">
          <div className="register-span"></div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
          faucibus in ornare quam viverra orci sagittis eu volutpat.
        </blockquote>

        <p className="mb-6 opacity-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
          faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra
          sit amet aliquam id diam maecenas ultricies.
        </p>
      </div>
      <div className="form-wrapper flex flex-col p-10 bg-[#ffff] h-1/2">
        <h4 className="font-bold text-xl mb-8">REGISTER NOW</h4>
        <div className="">
          <div className="flex w-96 mb-8">
            <p className="flex items-center space-x-2">
              <FaMapPin className="mr-1" /> No 233 Main St. New York, United
              States
            </p>
            <p className="flex items-center space-x-2 w-1/2">
              <FaClock className="mr-1" /> 13 May, 2018
            </p>
          </div>
          <form action="" className="flex flex-col">
            <label
              htmlFor="full-name"
              className="text-sm opacity-75 font-normal"
            >
              Full Name
            </label>
            <input
              type="text"
              className="register-input border-b-2 mt-3 mb-8 w-96 h-16 px-2 focus:outline-none"
              placeholder="Leonard John"
            />
            <label htmlFor="email" className="text-sm opacity-75 font-normal">
              Email
            </label>
            <input
              type="text"
              className="border-b-2 mt-3 mb-8 w-96 h-16 px-2  focus:outline-none "
              placeholder="admin@abc.com"
            />
            <button
              type="submit"
              className="btn w-40 leading-3 text-xs bg-[#FFD2A4] rounded-lg"
            >
              REGISTER NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;

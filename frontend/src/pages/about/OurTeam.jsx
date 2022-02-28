import Teams from "./team";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function OurTeam() {
  return (
    <section className="flex flex-col items-center justify-center mb-32 px-28">
      <h6 className="text-base">CHURCH MEMBERS</h6>
      <h2 className=" text-center mb-16">MEET OUR INSPIRATIONAL TEAM</h2>
      <div className="flex space-x-4 items-center justify-center ">
        {Teams.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center justify-center bg-[#F5F2F0] w-72 h-80"
          >
            <div className="">
              <img src={data.image} alt="members" className="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h5 className="font-bold text-lg mb-2">
                {data.name.toUpperCase()}
              </h5>
              <p className="opacity-75 mb-4 ">{data.position}</p>
            </div>

            <div className="flex space-x-4 ">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;

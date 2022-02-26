import { FaClock, FaMapPin } from "react-icons/fa";
// import { useEffect } from "react";
// import axios from "axios";
import upcomingEvents from "./upcomingEventsData";

function Events() {
  // const [events, setEvents] = useState();
  // const url = "http://localhost:6000/api/upcomingEvents";

  return (
    <section className="flex flex-col items-center justify-center mb-32">
      <h6 className="text-base font-normal">READ OUR BLOG</h6>
      <h2 className="mb-16">SHARE, INSPIRE, INNOVATE</h2>
      <div className="flex space-x-3 justify-items-center items-center">
        {upcomingEvents.map((event) => (
          <div className="events-wrapper relative flex flex-col bg-[#FFF5EB] items-start justify-items-center px-10 py-20">
            <h6 className="join-text text-xs font-bold">UPCOMING EVENT</h6>
            <h5 className="text-xl w-full mt-4 mb-8 font-bold">
              {event.heading.toUpperCase()}
            </h5>
            <p className="w-64 opacity-75 font-normal ">{event.description}</p>
            <div className="">
              <div className="date">
                <FaClock className="w-5 mr-4" />
                <div className="address">
                  <p>{event.time} </p>
                  <p>{event.time2}</p>
                </div>
              </div>
              <div className="date">
                <FaMapPin className="w-5 mr-4" />
                <div className="address">
                  <p>{event.location}</p>
                  <p>{event.location2}</p>
                </div>
              </div>
            </div>

            <span className="flex flex-col items-center justify-items-center absolute top-0 right-0 p-4">
              <h5 className="text-2xl font-bold">{event.date}</h5>
              <p className="text-base font-normal">{event.month}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;

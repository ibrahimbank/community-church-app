import { FaClock, FaMapPin } from "react-icons/fa";
// import { useEffect } from "react";
// import axios from "axios";
import upcomingEvents from "./upcomingEventsData";

function Events({ subHeading, heading }) {
  // const [events, setEvents] = useState();
  // const url = "http://localhost:6000/api/upcomingEvents";

  return (
    <section className="flex  flex-col items-center justify-center">
      <h6 className="text-base font-normal">{subHeading}</h6>
      <h2 className="mb-16">{heading}</h2>
      <div className="grid  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:flex 2xl:space-x-3 justify-items-center items-center">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="events-wrapper relative flex flex-col bg-[#FFF5EB] "
          >
            <div className="px-10 py-20 items-start justify-items-center ">
              <h6 className="join-text text-xs font-bold">UPCOMING EVENT</h6>
              <h5 className="text-lg w-full mt-4 mb-6 font-bold">
                {event.heading.toUpperCase()}
              </h5>
              <p className="w-64 opacity-75 font-normal ">
                {event.description}
              </p>
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
            {event.id === 1 && (
              <div className="h-4 w-full bg-[#FFD2A4] -mt-4"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;

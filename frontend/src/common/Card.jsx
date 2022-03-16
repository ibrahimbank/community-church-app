import CardData from "./cardData";

function Card() {
  return (
    <div className="flex flex-col flex-wrap xl:space-x-4 xl:flex-row lg:grid grid-cols-2 gap-4 justify-items-center content-center">
      {CardData.map((card) => (
        <div
          key={card.id}
          className="flex mt-8  flex-col md:mt-0  pt-20 w-96 h-auto bg-[#FFF5EB]"
        >
          <div className="flex flex-col justify-start px-20 mb-28">
            <div className="w-12 h-12 bg-[#FFD2A4] flex items-center justify-center rounded-full mb-6">
              <img src={card.icon} alt="icon" />
            </div>
            <h4 className="mb-2 text-lg text-[#161722] font-bold">
              {card.heading}
            </h4>
            <p className="leading-6 mb-1 w-60 h-24 text-[ #161722]text-base">
              {card.description}
            </p>
          </div>
          <span className="w-96 h-4 bg-[#FFD2A4]"></span>
        </div>
      ))}
    </div>
  );
}

export default Card;

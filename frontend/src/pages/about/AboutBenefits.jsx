import Benefit from "./benefitsData";

function AboutBenefits() {
  return (
    <section className="flex flex-col items-center justify-center mb-32">
      <h6 className="text-base">BENEFITS</h6>
      <h2 className="w-full sm:w-96 text-center mb-16 font-bold text-base sm:text-3xl">
        THE BENEFITS OF JOINING OUR CHURCH
      </h2>
      {Benefit.map((data) => (
        <div key={data.id} className={data.class}>
          <div className="cool w-full items-center justify-center sm:w-1/2 flex flex-col">
            <h4 className="font-bold text-lg mb-4">{data.heading}</h4>
            <p className="benfit-para opacity-75 text-center sm:text-justify  w-full sm:w-1/2">
              {data.detail}
            </p>
          </div>
          <div className="img-wrapper items-center justify-center">
            <img src={data.image} alt="members" className="" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default AboutBenefits;

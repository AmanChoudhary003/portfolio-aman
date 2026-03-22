import { homeServiceSection } from "@/constant/constant";

export default function Service() {
  return (
    <div className="p-10">
      <h2 className="highlightFont text-white text-5xl md:text-9xl font-bold my-2">
        SERVICES
        <span className="  text-(--highlightColor)">.</span>
      </h2>
      <div className="mt-10">
        {homeServiceSection.map((service, index) => {
          return (
            <div
              key={index}
              className="py-10  flex justify-between items-center  border-b relative group"
            >
              <div className="flex items-center">
                <p className="w-10 text-3xl text-(--highlightColor) mr-10 font-medium">{`0${index + 1}`}</p>
                <h2 className="w-100 text-3xl text-white font-medium">
                  {service.title}
                </h2>
              </div>
              <p className="w-100">{service.paragraph}</p>
              <div className="w-0 h-0.5 absolute -bottom-0.5 left-0  bg-(--highlightColor) transition-all duration-500 group-hover:w-full z-10"></div>
              <div className="rotate-180 w-0 h-0.5 absolute -bottom-0.5 right-0 bg-(--highlightColor) transition-all  duration-500 group-hover:w-full z-10"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

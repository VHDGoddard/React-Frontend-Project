import { useState, useEffect, useRef } from "react";
import CarCard from "../CarCard/CarCard";
import "../CarClass/CarClassAnimation.css";

const CarClass = ({ carClassName, carClassImage, cars}) => {
  const [showCards, setShowCards] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCards(true);
    }, 500); // Delay for the duration of the height transition
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setShowCards(false);
  };

  return (
    <section
      className={`w-full expandable bg-[#00000D] text-[#E9F8F9] relative flex flex-col items-center py-10 ${showCards ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute h-full inset-0 flex items-center justify-center object-cover">
        <img
          src={carClassImage}
          alt="form background"
          className={`showOnHover object-cover w-full h-full border-[#537FE7] border-y-2 z-10 ${showCards ? 'showImage' : ''}`}
        />
      </div>
      <h3 className="text-4xl z-20 pointer-events-none font-cyberpunk2">{carClassName}</h3>
      
      <div className="w-[80%] h-full relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-30 pointer-events-none">
        {showCards && cars.map((car, index) => (
          <div key={index} className="relative flex mt-10 justify-center z-30">
            <CarCard carModel={car.modelo} carDesc={car.desc} carImage={car.imagem}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarClass;

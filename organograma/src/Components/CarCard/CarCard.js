const CarCard = ({carModel, carImage, carDesc }) => {
    return (
        <div className="
            relative w-[300px] h-full hover:w-[325px] ease-in-out transition-all min-h-[200px]
            rounded-[25px] flex flex-col items-center bg-gradient-to-br from-[#010B13]/80 to-[#101016]/90 
            border-2 border-[#1F1F28] mr-0 pointer-events-auto backdrop-blur-sm z-30 overflow-hidden border-box"
        >
            <img src={carImage} alt="car background" className="w-full h-[150px] object-cover z-10 border-b-2 border-[#1F1F28]"/>
            <div className="w-fit max-w-[80%] h-[60%] flex flex-col items-center py-4 break-words">
                <h4 className="font-cyberpunk1 text-5xl text-white mb-3 font-semibold">{carModel}</h4>
                <p className="text-slate-500 text-md mb-3 font-semibold">{carDesc}</p>
            </div>
        </div>
    );
  };
  
  export default CarCard;
  
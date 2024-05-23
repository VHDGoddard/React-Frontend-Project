import React from "react";

function Banner() {
  return (
    <header className="relative w-full h-[700px] bg-[#0C090A] flex justify-center items-center shadow-md">
      <img
        src="/images/black-hero.jpg"
        alt="hero"
        className="absolute h-full w-full"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 70%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 70%)",
        }}
      />
      <div className="w-[70%] h-fit flex flex-wrap justify-between items-center relative z-10">
        <div className="w-[500px] h-fit flex justify-center items-center bg-gradient-to-r from-[#010B13] to-[#010127] rounded-[25px] p-6 shadow-2xl">
          <div className="flex items-center flex-col">
            <div className="w-fit h-fit flex flex-col justify-center items-center shadow-md bg-[#101016] my-5 mb-7 p-4 rounded-[25px]">
              <svg
              //#010127
              /*style={{
                filter: 'drop-shadow(0 0 10px #010127) drop-shadow(0 0 15px #010127) drop-shadow(0 0 20px #010127)',
              }}*/
                className="h-[50px]"
                fill="#537FE7"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 293.538 293.538"
                xmlSpace="preserve"
                stroke="#537FE7"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="210.084,88.631 146.622,284.844 81.491,88.631 "></polygon>{" "}
                      <polygon points="103.7,64.035 146.658,21.08 188.515,64.035 "></polygon>{" "}
                      <polygon points="55.581,88.631 107.681,245.608 0,88.631 "></polygon>{" "}
                      <polygon points="235.929,88.631 293.538,88.631 184.521,247.548 "></polygon>{" "}
                      <polygon points="283.648,64.035 222.851,64.035 168.938,8.695 219.079,8.695 "></polygon>{" "}
                      <polygon points="67.563,8.695 124.263,8.695 68.923,64.035 7.969,64.035 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h1 className="font-cyberpunk1 text-white text-2xl">La Garage</h1>
            </div>
            <h1 className="text-5xl text-white mb-3 font-semibold font-cyberpunk2">
              O melhor{" "}
              <span className="text-[#537FE7]">cuidado </span>
              para seu carro
            </h1>
            <p className="text-white text-xl mb-3 font-cyberpunk2">
              A La Garage é a melhor empresa especializada em manutenção e
              conserto de carros.
            </p>
          </div>
        </div>
      </div>
      <video
        src="/images/hero.mp4"
        alt="Hero"
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 w-[70%] min-w-[600px] h-full object-cover"
        style={{
          maskImage:
            "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        }}
      />
    </header>
  );
}

export default Banner;

import React from 'react'
import cosmetic from "../Assets/cosmeticpng.png";
import perfume from "../Assets/perfumepng.png";
import shoes from "../Assets/shoespng.png";

const Home3 = () => {
  return (
    <div className="py-10 px-4 md:px-10 lg:px-20">

      <div className="">
        <strong className="text-xl md:text-5xl text-center font-bold text-gray-800 block mb-4">
          Best Month Offer
        </strong>
        <p className="text-1xl md:text-base text-center text-gray-600 mb-20 font-semibold">
          Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus
          fermentum tristique
          <br></br>
           lobortis lectus Magnis. Consequat porta turpis maecenas.
        </p>

      </div>

      <div className="flex flex-col w-[95%] md:flex-row justify-center m-auto gap-0 md:gap-5">
        <div className="mb-8 md:mb-0 flex w-full overflow-hidden">
          <img
            src={cosmetic}
            alt="Cosmetic"
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-0 md:gap-5 w-full">
          <div className="flex justify-center overflow-hidden rounded-none">
            <img
              src={perfume}
              alt="Perfume"
              className="w-full h-auto object-cover rounded-none transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex justify-center overflow-hidden">
            <img
              src={shoes}
              alt="Shoes"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home3
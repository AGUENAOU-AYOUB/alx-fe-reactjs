import { useState, useEffect } from "react";
import FoodCard from "./foodCard";
import data from "../data.json";
function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
     setRecipes(data);
  }, [data]);

  return (
    <div className="w-full h-full bg-white grid grid-cols-1 grid-rows-[1fr_5fr]  ">
      <div className="row-start-1 row-end-2 flex flex-col py-[10%] gap-[2vh] md:h-[20vh] md:py-[1vh] md:mb-[2vh] bg-[#1b4332] ">
        <div className=" w-[50%] h-[50%] font-poppins  text-2xl text-center m-auto md:h-[5vh]">
          Hello There!
        </div>
        <input
          className="w-[70%] h-12 bg-white m-auto rounded-[22px] px-4 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] font-regular  text-gray-500 md:h-[5vh] hover:shadow-sm "
          placeholder="Search For Reciepes"
        />
      </div>
      <div className="w-full h-full bg-white row-start-2 row-end-3  text-black   overflow-y-scroll overflow-x-hidden px-[5%] md:px-[10px]  gap-[5vh]  py-[2vh] md:py-[5vh] grid grid-cols-2 md:grid-cols-3 ">
        {loading && <p>loading...</p>}
        {error && <p>error</p>}
        {recipes.map((recipe) => (
         <div className="group w-[90%] sm:w-[220px] md:w-[280px] lg:w-[320px] bg-[#1B4332] rounded-2xl overflow-hidden shadow transition-all duration-500 ease-in-out transform-gpu hover:-translate-y-4 hover:shadow-lg mx-auto ">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform-gpu group-hover:scale-110"
        />
      </div>
      <h3 className="p-3 text-white text-lg font-poppins ">{recipe.title}</h3>
      <p className="p-3 text-white text-[10px] font-poppins">{recipe.summary}</p>
    </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;

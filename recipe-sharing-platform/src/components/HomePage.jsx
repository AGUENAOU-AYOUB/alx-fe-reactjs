import { useState, useEffect } from "react";
import FoodCard from "./foodCard";
import data from "../data.json";
function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
     setRecipes(data);
  }, []);

  return (
    <div className="w-full h-full bg-white grid grid-cols-1 grid-rows-[1fr_5fr]  ">
      <div className="row-start-1 row-end-2 flex flex-col py-[10%] gap-[2vh] md:h-[20vh] md:py-[1vh] md:mb-[2vh] bg-[#1b4332] ">
        <div className=" w-[50%] h-[50%] font-poppins  text-2xl text-center m-auto md:h-[5vh]">
          Hello There!
        </div>
        <input
          className="w-[70%] h-12 bg-white m-auto rounded-[22px] px-4 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] font-regular  text-gray-500 md:h-[5vh] "
          placeholder="Search For Reciepes"
        />
      </div>
      <div className="w-full h-full bg-white row-start-2 row-end-3  text-black flex sm:flex-col overflow-y-scroll overflow-x-hidden px-[5%] md:px-[10px] md:flex-row gap-[5vh] md:gap-[20px] flex-wrap py-[2vh] md:py-[5vh]">
        {loading && <p>loading...</p>}
        {error && <p>error</p>}
        {recipes.map((recipe) => (
          <FoodCard key={recipe.id} {...recipe}/>
        ))}
      </div>
    </div>
  );
}
export default HomePage;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipes, setRecipes] = useState({});
  const [instructions, setInstructions] = useState();
  const [ingredients, setIngredients] = useState();

  useEffect(() => {
    setRecipes(data.find((r) => String(r.id) === String(id)));
  }, [id]);

  useEffect(() => {
    if (recipes.instruction) {
      setInstructions(true);
    } else {
      setInstructions(false);
    }
  }, [recipes]);

  useEffect(() => {
    if (recipes.ingredient) {
      setIngredients(true);
    } else {
      setIngredients(false);
    }
  }, [recipes]);

  return (
    <main className="w-full h-full grid grid-cols-1 grid-rows-[400px_2fr]  overflow-y-scroll overflow-x-hidden relative">
      <div className="w-full h-full row-start-1 row-end-2 p-4 md:p-8 overflow-hidden flex flex-col bg-[#1B4332] z-[1000]  ">
        <Link
          to={`/`}
          className="w-10 md:w-20 h-5 md:h-10 rounded-lg px-[4px] text-[10px] md:text-[14px] md:rounded-[22px] flex items-center justify-center border-[#B5C99A] text-[#B5C99A] font-bold border-solid border-[2px] font-poppins transition-all duration-300 ease-in-out hover:bg-[#B5C99A] hover:text-[#1B4332]"
        >
          Back
        </Link>
        <div className="group w-full h-[100%] my-2 rounded-[22px] overflow-hidden border-[2px] border-[#B5C99A] relative">
          <div className="w-full h-full transition-all duration-300 ease-in-out group-hover:shadow-[inset_0px_0px_20px_5px_rgba(0,0,0,0.5)] absolute z-[1000] top-0 left-0"></div>
          <img
            src={recipes.image}
            alt={recipes.title}
            className=" aspect-square object-cover object-center transition-transform group-hover:scale-110"
          />
        </div>
        <p className=" text-[20px] sm:text-[16px] md:text-[24px] font-poppins font-semibold text-white">
          {recipes.title}
        </p>
      </div>
      <div className="w-full  row-start-2 row-end-3  bg-[#B5C99A] grid grid-cols-1 grid-rows-[1fr_1fr] md:grid-cols-[1fr_1fr] md:grid-rows-1 gap-2 shadow-[inset_0px_5px_10px_-2px_rgba(0,0,0,0.5)] ">
        {ingredients && (
          <div className="w-full h-full row-start-1 row-end-2 md:col-start-1 md:col-end-2  flex flex-col items-stretch justify-start px-4 py-2 md:px-8 md:py-4">
            <h2 className="text-[20px] text-black font-poppins font-semibold ml-2 mt-2 border-b-2 w-full py-2 border-black ">Ingredients</h2>
            <ul className="w-full  h-full flex-1 overflow-auto  list-disc list-inside gap-2 pt-2 ml-2 text-black font-poppins  shadow-[inset_0px_4px_4px_-2px_rgba(0,0,0,0.23)] md:mb-5">
              {recipes.ingredient.map((ingredient, index) => (
                <li key={index} className="w-full h-[40px] md:h-[50px]  text-start border-b border-[rgba(168,185,146,0.5)] text-[12px] md:text-[14px] md:py-2 md:px-1">{ingredient}</li>
              ))}
            </ul>
          </div>
        )}
        {instructions && (
          <div className="w-full h-full row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 flex flex-col items-start justify-center px-4 py-2 md:px-8 md:py-4">
            <h2 className="text-[20px] text-black font-poppins font-semibold ml-2 mt-2 border-b-2 w-full py-2 border-black">instructions</h2>
            <ol className="w-full h-full flex-1 overflow-auto list-decimal list-inside gap-2 pt-2 ml-2 text-black font-poppins shadow-[inset_0px_4px_4px_-2px_rgba(0,0,0,0.23)] md:mb-5">
              {recipes.instruction.map((ingredient, index) => (
                <li key={index} className="w-full  h-[40px] md:h-[50px]  text-start border-b border-[rgba(168,185,146,0.5)] text-[12px] md:text-[12px] lg:text-[14px] md:py-2 md:px-1" >{ingredient}</li>
              ))}
            </ol>
          </div>
        )}
        
      </div>
    </main>
  );
}

export default RecipeDetail;

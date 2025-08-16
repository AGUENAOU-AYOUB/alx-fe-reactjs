import { useState, useEffect } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState(false);
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeIngredients = (e) => {
    setIngredients(e.target.value);
  };
  const handleChangeSteps = (e) => {
    setSteps(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "" && steps === "" && ingredients === "") {
      setError(true);

      setTimeout(()=>{setError(false);
       
      }, 3000);
      return;
    }
  };

  return (
    <main className="w-full h-full bg-[#1b4332] flex flex-col items-center relative">
      <header className="w-full h-[10vh] md:h-[15vh] flex items-center justify-center font-poppins text-[30px] md:text-[35px] font-bold text-[#b5c99a]">
        <h1>Enter Your Recipe</h1>
      </header>
      <form onSubmit={handleSubmit} className="w-full md:w-[50%] h-full md:h-[50%] bg-white rounded-md md:rounded-xl border-2 border-[#b5c99a] grid grid-rows-[48px_2fr_2fr_48px] gap-2 px-4 md:px-8 py-8 md:py-4 ">
        <input
          onChange={handleChangeTitle}
          value={title}
          placeholder="Recipe Name"
          className="w-full h-full rounded-sm md:rounded-md lg:rounded-lg  px-2 py-3 md:px-4 md:py-3 bg-white border-[#b5c99a] border-2 text-[14px] text-black font-poppins font-normal md:text-[18px] placeholder-[#1b4332] placeholder:font-semibold row-start-1 row-end-2"
        />
        <textarea
          onChange={handleChangeIngredients}
          value={ingredients}
          placeholder="Ingerdients"
          className="w-full h-full rounded-sm md:rounded-md lg:rounded-lg  px-2 py-3 md:px-4 md:py-3 bg-white border-[#b5c99a] border-2 text-[14px] text-black font-poppins font-normal md:text-[18px] placeholder-[#1b4332] placeholder:font-semibold row-start-2 row-end-3"
        />
        <textarea
          onChange={handleChangeSteps}
          value={steps}
          placeholder="steps"
          className="w-full h-full rounded-sm md:rounded-md lg:rounded-lg  px-2 py-3 md:px-4 md:py-3 bg-white border-[#b5c99a] border-2 text-[14px] text-black font-poppins font-normal md:text-[18px] placeholder-[#1b4332] placeholder:font-semibold row-start-3 row-end-4"
        />
        <button
          type="submit"
          
          className="w-full h-full row-start-4 row-end-5 bg-[#1b4332] rounded-md md:rounded-xl font-poppins text-[#b5c99a] text-[14px] transition-all duration-300 ease-in-out hover:bg-[#b5c99a] hover:text-[#1b4332] font-semibold md:text-[18px]"
        >
          Submit Recipe
        </button>
        {error && (
          <div className="absolute  top-50 left-50 z-[1000] w-[30%] h-[48px] bg-red-900 flex items-center justify-center px-2 py-4 rounded-xl  font-poppins font-bold text-[16px]">
            Error
          </div>
        )}
      </form>
    </main>
  );
}
export default AddRecipeForm;

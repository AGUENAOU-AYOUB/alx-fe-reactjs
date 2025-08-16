// import { useState, useEffect } from "react";

// function AddRecipeForm() {
//   const [title, setTitle] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [steps, setSteps] = useState("");
//   const [error, setError] = useState(false);
//   const [valid, setValid] = useState(false)
//   const handleChangeTitle = (e) => {
//     setTitle(e.target.value);
//   };
//   const handleChangeIngredients = (e) => {
//     setIngredients(e.target.value);
//   };
//   const handleChangeSteps = (e) => {
//     setSteps(e.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (title === "" && steps === "" && ingredients === "") {
//       setError(true);

//       setTimeout(()=>{setError(false);
       
//       }, 3000);
//       return;
//     }else{
//         setValid(true);
//         setTimeout(()=>{
//             setValid(false)
//         }, 3000)
//     }
//   };

//   return (
//     <main className="w-full h-full bg-[#1b4332] flex flex-col items-center relative">
//       <header className="w-full h-[10vh] md:h-[15vh] flex items-center justify-center font-poppins text-[30px] md:text-[35px] font-bold text-[#b5c99a]">
//         <h1>Enter Your Recipe</h1>
//       </header>
//       <form onSubmit={handleSubmit} className="w-full md:w-[50%] h-full md:h-[50%] bg-white rounded-md md:rounded-xl border-2 border-[#b5c99a] grid grid-rows-[48px_2fr_2fr_48px] gap-2 px-4 md:px-8 py-8 md:py-4 ">
//         <input
//           onChange={handleChangeTitle}
//           value={title}
//           placeholder="Recipe Name"
//           className="w-full h-full rounded-sm md:rounded-md lg:rounded-lg  px-2 py-3 md:px-4 md:py-3 bg-white border-[#b5c99a] border-2 text-[14px] text-black font-poppins font-normal md:text-[18px] placeholder-[#1b4332] placeholder:font-semibold row-start-1 row-end-2"
//         />
//         <textarea
//           onChange={handleChangeIngredients}
//           value={ingredients}
//           placeholder="Ingerdients"
//           className="w-full h-full rounded-sm md:rounded-md lg:rounded-lg  px-2 py-3 md:px-4 md:py-3 bg-white border-[#b5c99a] border-2 text-[14px] text-black font-poppins font-normal md:text-[18px] placeholder-[#1b4332] placeholder:font-semibold row-start-2 row-end-3"
//         />
//         <textarea
//           onChange={handleChangeSteps}
//           value={steps}
//           placeholder="steps"
//           className="w-full h-full rounded-sm md:rounded-md lg:rounded-lg  px-2 py-3 md:px-4 md:py-3 bg-white border-[#b5c99a] border-2 text-[14px] text-black font-poppins font-normal md:text-[18px] placeholder-[#1b4332] placeholder:font-semibold row-start-3 row-end-4"
//         />
//         <button
//           type="submit"
          
//           className="w-full h-full row-start-4 row-end-5 bg-[#1b4332] rounded-md md:rounded-xl font-poppins text-[#b5c99a] text-[14px] transition-all duration-300 ease-in-out hover:bg-[#b5c99a] hover:text-[#1b4332] font-semibold md:text-[18px]"
//         >
//           Submit Recipe
//         </button>
//         {error && (
//           <div className="absolute  top-50 left-50 z-[1000] w-[30%] h-[48px] bg-red-900 flex items-center justify-center px-2 py-4 rounded-xl  font-poppins font-bold text-[16px]">
//             Error
//           </div>
//         )}
//         {valid && (
//           <div className="absolute  top-50 left-50 z-[1000] w-[30%] h-[48px] bg-green-900 flex items-center justify-center px-2 py-4 rounded-xl  font-poppins font-bold text-[16px]">
//             Validate
//           </div>
//         )}
//       </form>
//     </main>
//   );
// }
// export default AddRecipeForm;
import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});       
  const [ok, setOk] = useState(false);


  function validate(values) {                   
    const errs = {};
    if (!values.title.trim()) errs.title = "Title is required";
    if (!values.ingredients.trim()) errs.ingredients = "Ingredients are required";
    if (!values.steps.trim()) errs.steps = "Steps are required";

    if (values.title.length > 60) errs.title = "Keep title under 60 chars";
    return errs;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate({ title, ingredients, steps });
    setErrors(v);                               
    if (Object.keys(v).length) {
      setOk(false);
      return;
    }

    setOk(true);
    setTimeout(() => setOk(false), 2000);
    setTitle(""); setIngredients(""); setSteps("");
  };

  const inputBase =
    "w-full rounded-md px-3 py-3 bg-white border-2 text-[14px] text-[#1b4332] md:text-[16px] " +
    "placeholder-[#1b4332] placeholder:font-semibold focus:outline-none";

  return (
    <main className="min-h-screen w-full bg-[#1b4332] flex flex-col items-center">
      <header className="w-full py-6 md:py-10 flex items-center justify-center font-poppins text-[28px] md:text-[36px] font-bold text-[#b5c99a]">
        <h1>Enter Your Recipe</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-xl md:max-w-2xl bg-white rounded-xl border-2 border-[#b5c99a] p-4 md:p-8 grid gap-4"
      >
   
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Name"
            className={`${inputBase} ${errors.title ? "border-red-500" : "border-[#b5c99a]"}`}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>


        <div>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients"
            rows={5}
            className={`${inputBase} ${errors.ingredients ? "border-red-500" : "border-[#b5c99a]"}`}
          />
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>

    
        <div>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Steps"
            rows={6}
            className={`${inputBase} ${errors.steps ? "border-red-500" : "border-[#b5c99a]"}`}
          />
          {errors.steps && (
            <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-[#1b4332] rounded-xl font-poppins text-[#b5c99a] text-[16px] md:text-[18px] font-semibold transition hover:bg-[#b5c99a] hover:text-[#1b4332]"
        >
          Submit Recipe
        </button>


        {Object.keys(errors).length > 0 && (
          <div className="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[60%] h-[48px] bg-red-700 text-white flex items-center justify-center px-3 rounded-xl font-poppins font-bold">
            Please fix the errors
          </div>
        )}
        {ok && (
          <div className="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[60%] h-[48px] bg-green-700 text-white flex items-center justify-center px-3 rounded-xl font-poppins font-bold">
            Saved ✅
          </div>
        )}
      </form>

      <div className="h-10" />
    </main>
  );
}

export default AddRecipeForm;

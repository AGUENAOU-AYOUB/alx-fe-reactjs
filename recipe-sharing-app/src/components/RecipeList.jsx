import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

function RecipeList()  {
  
  const filteredRecipes =  useRecipeStore(
    (state) => state.filteredRecipes
  );
   if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }
  return (
    <div>
        <AddRecipeForm/>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
      
    </div>
  );
};

export default RecipeList;

// RecipeList.jsx
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

// ❤️ Favorite Button Component
const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
    </button>
  );
};

// 📋 Recipe List
function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <AddRecipeForm />
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded my-2">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <FavoriteButton recipeId={recipe.id} />
          <Link to={`/recipes/${recipe.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export { FavoriteButton };
export default RecipeList;

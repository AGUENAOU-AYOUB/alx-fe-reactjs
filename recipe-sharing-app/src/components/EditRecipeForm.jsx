import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({
      id: Number(id),
      title,
      description,
    });
    navigate(`/recipes/${id}`);
  };
  if (!recipe) return <p>Recipe not found :/</p>;
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save changes</button>
    </form>
  );
}
export default EditRecipeForm;

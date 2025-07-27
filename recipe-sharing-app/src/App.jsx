import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

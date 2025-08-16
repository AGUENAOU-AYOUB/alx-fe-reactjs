import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import { BrowserRouter } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/addrecipe" element={<AddRecipeForm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
